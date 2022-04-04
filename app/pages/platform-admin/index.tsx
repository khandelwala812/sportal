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
  name: "Name"
  // startTime: "",
  // endTime: ""
}

interface IEventFormValues {
  name: string
}

const PlatformAdminPage: FC = () => {
  const [calendar, setCalendar] = useState<ICalendar>(initialCalendar)
  const [selectedDay, setSelectedDay] = useState<IDay | IDayOfWeek | null>(null)
  const [addingEvent, setAddingEvent] = useState(false)
  const [editedEvent, setEditedEvent] = useState<IEvent | null>(null)
  const validationSchema = Yup.object().shape({
    name: Yup.string().required().label("Event Name")
    // startTime: Yup.date().required().label("Start Time"),
    // endTime: Yup.date().required().label("End Time")
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
        year: calendar.year
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
            initialValues={eventToValues(editedEvent)}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <SC.FieldsWrapper>
              <SC.NameField name="name" placeholder="Event Name" />
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
