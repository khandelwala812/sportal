import React, { FC, useEffect, useState } from "react"
import { View } from "react-native"
import * as Yup from "yup"

import * as SC from "./styles"
import { ICalendar, IDay, IDayOfWeek, IEvent } from "../../types"
import eventsApi from "../../api/events"
import colors from "../../config/colors"
import Calendar from "../../components/Calendar"
import EventCard from "../../components/EventCard"
import Form from "../../components/Form"
import TimeField from "../../components/TimeField"
import CheckBox from "../../components/CheckBox"

const initialCalendar = {
  year: 0,
  month: "",
  days: []
}

const initialValues = {
  name: "",
  location: "",
  startTime: "",
  endTime: "",
  description: ""
}

interface IEventFormValues {
  name: string
  location: string
  startTime: string
  endTime: string
  description: string
}

// TODO: validate times
const PlatformAdminPage: FC = () => {
  const [calendar, setCalendar] = useState<ICalendar>(initialCalendar)
  const [selectedDay, setSelectedDay] = useState<IDay | IDayOfWeek | null>(null)
  const [isOnline, setIsOnline] = useState(false)
  const [addingEvent, setAddingEvent] = useState(false)
  const [editedEvent, setEditedEvent] = useState<IEvent | null>(null)
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Enter a name").label("Event Name"),
    location: Yup.string().required("Enter a location").label("Location"),
    online: Yup.boolean(),
    startTime: Yup.string().required("Enter a time").label("Start Time"),
    endTime: Yup.string().required("Enter a time").label("End Time"),
    description: Yup.string().label("Description")
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

  const eventToValues = (event: IEvent) => {
    const e = {
      ...event,
      startTime: "00:00",
      endTime: "00:00"
    }
    console.log(e)
    return e
  }

  const resetCalendar = (day: IDay) => {
    const sameDay = selectedDay?.date === day.date

    setSelectedDay(sameDay ? null : day)
    setAddingEvent(false)
    setEditedEvent(null)
  }

  const handleChecked = () => {
    setIsOnline(online => !online)
  }

  useEffect(() => {
    fetchCalendar()
  }, [])

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
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <SC.FieldsWrapper>
              <SC.NameField name="name" placeholder="Event Name" />
              <SC.LocationField
                name="location"
                placeholder="Location"
                inputStyle={{ paddingBottom: 4 }}
              />
              <CheckBox
                title="Online?"
                checked={isOnline}
                onPress={handleChecked}
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
                titleStyle={{ color: colors.white }}
                multiline
              />
              <SC.AddEventButton title="Add Event" color="link" />
            </SC.FieldsWrapper>
          </Form>
        )}
        {editedEvent && (
          <SC.SideBarWrapper>
            <SC.SideBarColumn>
              <Form
                initialValues={eventToValues(editedEvent)}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                <SC.FieldsWrapper>
                  <SC.NameField name="name" placeholder="Event Name" />
                  <SC.LocationField
                    name="location"
                    placeholder="Location"
                    inputStyle={{ paddingBottom: 4 }}
                  />
                  <CheckBox
                    title="Online?"
                    checked={isOnline}
                    onPress={handleChecked}
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
                    titleStyle={{ color: colors.white }}
                    multiline
                  />
                  <SC.SaveButton title="Save" color="medium" />
                </SC.FieldsWrapper>
              </Form>
            </SC.SideBarColumn>
            <SC.SideBarColumn>
              <FlatList
                data={editedEvent.registeredUsers}
                ListHeaderComponent={<Text>Registered</Text>}
                keyExtractor={(_, i) => `#${i}`}
                renderItem={({ item }) => {
                  const registeredUser = item as IUser
                  return null
                }}
              />
              <FlatList
                data={editedEvent.waitlistedUsers}
                ListHeaderComponent={<Text>Waitlist</Text>}
                keyExtractor={(_, i) => `#${i}`}
                renderItem={({ item }) => {
                  const waitlistedUser = item as IUser
                  return null
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
