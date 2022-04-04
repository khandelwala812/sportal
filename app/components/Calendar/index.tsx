import React, { FC } from "react"
import { FlatList } from "react-native"

import * as SC from "./styles"
import { ICalendar, IDay, IDayOfWeek, IEvent } from "../../types"
import colors from "../../config/colors"
import daysOfWeek from "../../config/daysOfWeek"
import Day from "../Day"

interface ICalendarProps extends ICalendar {
  selectedDay: IDay | null
  onSelect: (newDay: IDay) => void
}

// generalize
// dayComponent?: React.ReactNode (user)
// sideBar?: React.ReactNode (admin)

const Calendar: FC<ICalendarProps> = ({
  days,
  month,
  year,
  selectedDay,
  onSelect
}) => {
  return (
    <SC.CalendarWrapper selectedDay={selectedDay}>
      <FlatList
        contentContainerStyle={{
          alignSelf: "center"
        }}
        data={[...daysOfWeek, ...days]}
        numColumns={7}
        keyExtractor={(_, i) => `#${i}`}
        ListHeaderComponent={
          <SC.MonthWrapper>
            <SC.Chevron name="chevron-left" size={30} color={colors.white} />
            <SC.Month>
              {month} {year}
            </SC.Month>
            <SC.Chevron name="chevron-right" size={30} color={colors.white} />
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
              onSelect={() => onSelect(day)}
            />
          )
        }}
      />
    </SC.CalendarWrapper>
  )
}

export default Calendar
