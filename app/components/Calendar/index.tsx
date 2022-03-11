import React, { FC } from "react"
import { FlatList } from "react-native"

import { IEvent } from "../../types"

interface ICalendarProps {
  weeks: IEvent[][]
}

const Calendar: FC<ICalendarProps> = ({ weeks }) => {
  // backend: events => { name, ..., date }
  // send { days: { date, events: [{ id, name... }] }, firstDayOfMonth }
  // days => add filler days

  // return <FlatList data={days} numColumns={7} renderItem={({ item }) => {...}} />

  return (
    <FlatList
      data={weeks}
      keyExtractor={(_, i) => `#{i}`}
      renderItem={({ item }) => {
        const events = item as IEvent[]
        return (
          <FlatList
            data={events}
            keyExtractor={(_, i) => `#{i}`}
            renderItem={({ item }) => {
              const event = item as IEvent
              return null
            }}
          />
        )
      }}
    />
  )
}

export default Calendar
