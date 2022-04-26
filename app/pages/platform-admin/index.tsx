import React, { FC, useEffect, useState } from "react"
import { FlatList, View } from "react-native"
import * as Yup from "yup"

import * as SC from "./styles"
import { ICalendar, IDay, IDayOfWeek, IEvent, IUser } from "../../types"
import eventsApi from "../../api/events"
import colors from "../../config/colors"
import Calendar from "../../components/Calendar"
// import CheckBox from "../../components/CheckBox"
import EventCard from "../../components/EventCard"
import Form from "../../components/Form"
import TimeField from "../../components/TimeField"
import UserCard from "../../components/UserCard"
import { Button, Image, CheckBox } from 'react-native-elements'
import { Formik } from "formik"
import * as ImagePicker from 'expo-image-picker'

const initialCalendar = {
  year: 0,
  month: "",
  days: []
}

const initialValues = {
  name: "",
  location: "",
  capacity: 0,
  startTime: "",
  endTime: "",
  description: "",
  isOnline: true,
  image: ""
}

interface IEventFormValues {
  name: string
  location: string
  capacity: number
  startTime: string
  endTime: string
  description: string
  isOnline: boolean
  image: string
}

const pickImage = async (setFieldValue) => {
  // No permissions request is necessary for launching the image library
  let result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.All,
    allowsEditing: true,
    aspect: [6, 3],
    quality: 1,
    base64: true
  });

  if (!result.cancelled)
  {
    console.log(result)
    setFieldValue('image', result.uri)
  }

}
// TODO: validate times
const PlatformAdminPage: FC = () => {
  const [calendar, setCalendar] = useState<ICalendar>(initialCalendar)
  const [selectedDay, setSelectedDay] = useState<IDay | IDayOfWeek | null>(null)
  const [registeredUsers, setRegisteredUsers] = useState<IUser[]>([])
  const [waitlistedUsers, setWaitlistedUsers] = useState<IUser[]>([])
  const [isOnline, setIsOnline] = useState(false)
  const [addingEvent, setAddingEvent] = useState(false)
  const [editedEvent, setEditedEvent] = useState<IEvent | null>(null)
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter a name").label("Event Name"),
    location: Yup.string().required("Enter a location").label("Location"),
    capacity: Yup.number()
      .required("Enter a capacity")
      .min(1)
      .max(100)
      .label("Capacity"),
    online: Yup.boolean(),
    startTime: Yup.string().required("Enter a time").label("Start Time"),
    endTime: Yup.string().required("Enter a time").label("End Time"),
    description: Yup.string().required().label("Description"),
    isOnline: Yup.boolean().label("Is Online")
  })

  const handleAdd = () => {
    setAddingEvent(true)
  }

  const handleSubmit = async (newEvent: IEventFormValues) => {
    const newDays = [...calendar.days]

    if (editedEvent) {
      const updatedEvent = { ...newEvent, _id: editedEvent._id }

      for (const day of newDays) {
        const index = day.events.findIndex(
          (event: IEvent) => event._id === editedEvent._id
        )

        if (index >= 0) {
          day.events[index] = updatedEvent
        }
      }

      await eventsApi.editEvent(updatedEvent)
      setEditedEvent(null)
    } else {
      const index = newDays.findIndex(
        (day: IDay) => day.date === selectedDay?.date
      )
      const response = await eventsApi.addEvent({
        ...newEvent,
        day: selectedDay?.date,
        month: calendar.month,
        year: calendar.year,
        online: isOnline
      })

      if (response.ok && response?.data) {
        newDays[index].events.push(response.data)
      }
    }

    setCalendar((c: ICalendar) => ({ ...c, days: newDays }))
    setAddingEvent(false)
  }

  const fetchCalendar = async () => {
    const response = await eventsApi.getCalendar()

    if (response.ok && response?.data) {
      setCalendar(response.data)
    }
  }

  // const eventToValues = (event: IEvent) => {
  //   const e = {
  //     ...event,
  //     startTime: "00:00",
  //     endTime: "00:00"
  //   }
  //   return e
  // }

  const resetCalendar = (day: IDay) => {
    const sameDay = selectedDay?.date === day.date

    setSelectedDay(sameDay ? null : day)
    setAddingEvent(false)
    setEditedEvent(null)
  }

  const handleChecked = () => {
    setIsOnline(online => !online)
  }

  const fetchEventUsers = async () => {
    if (!editedEvent) return

    const response = await eventsApi.getUsers(editedEvent._id)

    if (response.ok && response?.data) {
      const { waitlistedUsers, registeredUsers } = response.data
      setWaitlistedUsers(waitlistedUsers)
      setRegisteredUsers(registeredUsers)
    }
  }

  useEffect(() => {
    fetchCalendar()
  }, [])

  useEffect(() => {
    fetchEventUsers()
  }, [editedEvent?._id])

  if (!calendar.days.length) {
    return null
  }

  return (
    <SC.PageLayout title="Platform Admin" color="background">
      <SC.Column></SC.Column>
      <Calendar
        {...calendar}
        selectedDay={selectedDay}
        onSelect={resetCalendar}
      />
      <SC.Column>
        {selectedDay && !addingEvent && !editedEvent && (
          <SC.EventsWrapper>
            {selectedDay.events.length ? (
              <SC.EventsList
                data={selectedDay.events}
                keyExtractor={(_, i) => `#${i}`}
                renderItem={({ item }) => {
                  const event = item as IEvent
                  return (
                    <EventCard event={event} setEditedEvent={setEditedEvent} />
                  )
                }}
              />
            ) : (
              <SC.NoEventsText>No events on this day</SC.NoEventsText>
            )}
            <SC.PlusButton color="medium" onPress={handleAdd}>
              <SC.Plus name="plus" size={24} color={colors.white} />
            </SC.PlusButton>
          </SC.EventsWrapper>
        )}
        {addingEvent && selectedDay && (
          <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          {({
        values,
        setFieldValue
      }) =>
            (<SC.FieldsWrapper>
              <SC.NameField name="name" placeholder="Event Name" />
              <SC.LocationField
                name="location"
                placeholder="Location"
                inputStyle={{ paddingBottom: 4 }}
              />
              <SC.CapacityField
                name="capacity"
                keyboardType="numeric"
                placeholder="Capacity"
                inputStyle={{ paddingBottom: 4 }}
              />           
              <View>
                <TimeField
                  name="startTime"
                  title="Start Time"
                  placeholder="00:00"
                />
                <TimeField
                  name="endTime"
                  title="End Time"
                  placeholder="00:00"
                />
              </View>
              <SC.Description
                name="description"
                title="Description"
                multiline
              />
              <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Button title="Pick event image" onPress={() => pickImage(setFieldValue)} />
                {values.image.length > 0 && <Image source={{ uri: values.image }} style={{ width: 300, height: 150 }} />}
              </View>                 
              <SC.FieldWrapper>
                <CheckBox
                  name="isOnline"
                  checkedIcon="check-box"
                  iconType="material"
                  uncheckedIcon="check-box-outline-blank"
                  title="Is Online?"
                  checked={values.isOnline}
                  onPress={() => setFieldValue('isOnline', !values.isOnline)}
                />
              </SC.FieldWrapper>         
              <SC.AddEventButton title="Add Event" color="link" />
            </SC.FieldsWrapper>)}
          </Formik>
        )}
        {editedEvent && (
          <SC.SideBarWrapper>
            <SC.SideBarColumn width={60}>
            <Formik
          initialValues={editedEvent as IEventFormValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
              {({
            values,
            setFieldValue
          }) =>
                (<SC.FieldsWrapper>
                  <SC.NameField name="name" placeholder="Event Name" />
                  <SC.LocationField
                    name="location"
                    placeholder="Location"
                    inputStyle={{ paddingBottom: 4 }}
                  />
                  <SC.CapacityField
                    name="capacity"
                    keyboardType="numeric"
                    placeholder="Capacity"
                    inputStyle={{ paddingBottom: 4 }}
                  />
                  {/* <Checkbox
                    title="Online?"
                    checked={isOnline}
                    onPress={handleChecked}
                  /> */}
                  <View>
                    <TimeField
                      name="startTime"
                      title="Start Time"
                      placeholder="00:00"
                    />
                    <TimeField
                      name="endTime"
                      title="End Time"
                      placeholder="00:00"
                    />
                  </View>
                  <SC.Description
                    name="description"
                    title="Description"
                    titleStyle={{ color: colors.white }}
                    multiline
                  />
                  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Button title="Pick event image" onPress={() => pickImage(setFieldValue)} />
                    {values.image && values.image.length > 0 && <Image source={{ uri: values.image }} style={{ width: 300, height: 150 }} />}
                  </View>                   
                  <SC.FieldWrapper>
                    <CheckBox
                      name="isOnline"
                      checkedIcon="check-box"
                      iconType="material"
                      uncheckedIcon="check-box-outline-blank"
                      title="Is Online?"
                      checked={values.isOnline}
                      onPress={() => setFieldValue('isOnline', !values.isOnline)}
                    />
                </SC.FieldWrapper>                  
                  <SC.SaveButton title="Save" color="link" />
                </SC.FieldsWrapper>)}
              </Formik>
            </SC.SideBarColumn>
            <SC.SideBarColumn width={40}>
              <FlatList
                data={registeredUsers}
                ListHeaderComponent={<SC.ListTitle>Registered</SC.ListTitle>}
                keyExtractor={(_, i) => `#${i}`}
                renderItem={({ item }) => {
                  const registeredUser = item as IUser
                  return (
                    <UserCard
                      user={registeredUser}
                      setWaitlistedUsers={setWaitlistedUsers}
                      setRegisteredUsers={setRegisteredUsers}
                      event={editedEvent}
                    />
                  )
                }}
              />
              <FlatList
                data={waitlistedUsers}
                ListHeaderComponent={<SC.ListTitle>Waitlisted</SC.ListTitle>}
                keyExtractor={(_, i) => `#${i}`}
                renderItem={({ item }) => {
                  const waitlistedUser = item as IUser
                  return (
                    <UserCard
                      user={waitlistedUser}
                      waitlisted
                      setWaitlistedUsers={setWaitlistedUsers}
                      setRegisteredUsers={setRegisteredUsers}
                      event={editedEvent}
                    />
                  )
                }}
              />
            </SC.SideBarColumn>
          </SC.SideBarWrapper>
        )}
      </SC.Column>
    </SC.PageLayout>
  )
}

export default PlatformAdminPage
