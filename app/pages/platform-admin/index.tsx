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

const initialCalendar = {
  year: 0,
  month: "",
  days: []
}

const initialValues = {
  eventName: ""
  // startTime: "",
  // endTime: ""
}

const noEvents = [{ name: "No events on this day" }]

interface IEventFormValues {
  eventName: string
}

const PlatformAdminPage: FC = () => {
  const [calendar, setCalendar] = useState<ICalendar>(initialCalendar)
  const [selectedDay, setSelectedDay] = useState<IDay | IDayOfWeek | null>(null)
  const [addingEvent, setAddingEvent] = useState(false)
  const validationSchema = Yup.object().shape({
    eventName: Yup.string().required().label("Event Name")
    // startTime: Yup.date().required().label("Start Time"),
    // endTime: Yup.date().required().label("End Time")
  })

  const handleAdd = () => {
    setAddingEvent(true)
  }

  const handleSubmit = ({ eventName, ...rest }: IEventFormValues) => {
    const newEvent = { ...rest, name: eventName }

    const newDays = [...calendar.days]
    const index = newDays.findIndex(
      (day: IDay) => day.date === selectedDay?.date
    )
    newDays[index].events.push(newEvent)

    setCalendar((c: ICalendar) => ({ ...c, days: newDays }))
    setAddingEvent(false)

    eventsApi.addEvent(newEvent)
  }

  const fetchCalendar = async () => {
    const response = await eventsApi.getCalendar()

    if (response.ok && response?.data) {
      setCalendar(response.data)
    }
  }

  useEffect(() => {
    fetchCalendar()
  }, [])

  if (!calendar.days.length) {
    return null
  }

  return (
    <SC.PageLayout title="Platform Admin" color="white">
      <SC.Column></SC.Column>
      <Calendar
        {...calendar}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <SC.Column>
        {selectedDay && !addingEvent && (
          <SC.EventsWrapper>
            <SC.EventsList
              data={selectedDay.events.length ? selectedDay.events : noEvents}
              keyExtractor={(_, i) => `#${i}`}
              renderItem={({ item }) => {
                const event = item as IEvent
                return <EventCard {...event} />
              }}
            />
            <SC.PlusButton color="medium" onPress={handleAdd}>
              <SC.Plus name="plus" size={24} color={colors.white} />
            </SC.PlusButton>
          </SC.EventsWrapper>
        )}
        {addingEvent && (
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <SC.FieldsWrapper>
              <SC.NameField name="eventName" placeholder="Event Name" />
              <View>
                <TimeField name="Start Time" placeholder="00:00" />
                <TimeField name="End Time" placeholder="00:00" />
              </View>
              <SC.AddEventButton title="Add Event" color="medium" />
            </SC.FieldsWrapper>
          </Form>
        )}
        {editedEvent && (
          <Form
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <SC.FieldsWrapper>
              <SC.NameField name="eventName" placeholder="Event Name" />
              <View>
                <TimeField name="Start Time" placeholder="00:00" />
                <TimeField name="End Time" placeholder="00:00" />
              </View>
              <SC.SaveButton title="Save" color="medium" />
            </SC.FieldsWrapper>
          </Form>
        )}
      </SC.Column>
    </SC.PageLayout>
  )
}

export default PlatformAdminPage
