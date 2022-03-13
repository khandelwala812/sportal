import React, { FC, useState } from "react"
import { FlatList, View } from "react-native"
import * as Yup from "yup"

import * as SC from "./styles"
import { IDay, IDayOfWeek, IEvent } from "../../types"
import colors from "../../config/colors"
import days from "../../config/days"
import Calendar from "../../components/Calendar"
import Form from "../../components/Form"
import Text from "../../components/Text"
import TimeField from "../../components/TimeField"

const initialValues = {
  eventName: ""
  // startTime: "",
  // endTime: ""
}

const PlatformAdminPage: FC = () => {
  const [eventDays, setEventDays] = useState<(IDay | IDayOfWeek)[]>(days)
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

  const handleSubmit = (newEvent: IEvent) => {
    const daysCopy = [...eventDays]
    const index = daysCopy.findIndex(
      (day: IDay) => day.date === selectedDay.date
    )

    if (daysCopy?.events) {
      daysCopy[index].events.push(newEvent)
    } else {
      daysCopy[index].events = [newEvent]
    }

    console.log(daysCopy)

    setEventDays(daysCopy)
    setAddingEvent(false)
  }

  return (
    <SC.PageLayout title="Platform Admin">
      <SC.Column></SC.Column>
      <Calendar
        days={eventDays}
        selectedDay={selectedDay}
        setSelectedDay={setSelectedDay}
      />
      <SC.Column>
        {selectedDay && !addingEvent && (
          <SC.EventsWrapper>
            <SC.EventsList
              data={selectedDay.events ?? []}
              keyExtractor={(_, i) => `#${i}`}
              renderItem={({ item }) => {
                const event = item as IEvent
                return <Text>{event.name}</Text>
              }}
            />
            <SC.PlusButton onPress={handleAdd}>
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
              <SC.AddEventButton title="Add Event" />
            </SC.FieldsWrapper>
          </Form>
        )}
      </SC.Column>
    </SC.PageLayout>
  )
}

export default PlatformAdminPage
