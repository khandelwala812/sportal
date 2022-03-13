import React, { FC, useState } from "react"
import { FlatList } from "react-native"

import * as SC from "./styles"
import { IDay, IDayOfWeek } from "../../types"
import Day from "../Day"
import colors from "../../config/colors"

interface ICalendarProps {
  days: (IDay | IDayOfWeek)[]
  selectedDay: IDay | IDayOfWeek | null
  setSelectedDay: (date: IDay | IDayOfWeek | null) => void
}

const Calendar: FC<ICalendarProps> = ({
  days,
  selectedDay,
  setSelectedDay
}) => {
  // backend: events => { name, ..., date }
  // send { days: { date, events: [{ id, name... }] }, firstDayOfMonth }
  // days => add filler days

  const handleSelect = (day: IDay) => () => {
    const sameDay = selectedDay?.date === day.date
    setSelectedDay(sameDay ? null : day)
  }

  return (
    <FlatList
      contentContainerStyle={{
        alignSelf: "center",
        borderRightWidth: selectedDay && 1
      }}
      data={days}
      numColumns={7}
      keyExtractor={(_, i) => `#${i}`}
      ListHeaderComponent={
        <SC.MonthWrapper>
          <SC.Chevron name="chevron-left" size={30} color={colors.black} />
          <SC.Month>March</SC.Month>
          <SC.Chevron name="chevron-right" size={30} color={colors.black} />
        </SC.MonthWrapper>
      }
      renderItem={({ item }) => {
        const day = item as IDay & IDayOfWeek

        if (day?.name) {
          return (
            <SC.DayOfWeekWrapper>
              <SC.DayOfWeek>{day.name}</SC.DayOfWeek>
            </SC.DayOfWeekWrapper>
          )
        }

        return (
          <Day
            day={day}
            selected={day.date === selectedDay?.date}
            onSelect={handleSelect(day)}
          />
        )
      }}
    />
  )
}

export default Calendar
