import React, { FC, useState } from "react"

import * as SC from "./styles"
import { IDay } from "../../types"
import colors from "../../config/colors"

interface IDayProps {
  day: IDay
  selected?: boolean
  onSelect?: () => void
}

const Day: FC<IDayProps> = ({ day, selected, onSelect }) => {
  return (
    <SC.DayWrapper>
      <SC.DateWrapper
        style={{
          backgroundColor: day.events && colors.light,
          color: day.filler && colors.light
        }}
        disabled={day.filler}
        filler={day.filler}
        selected={!day.filler && selected}
        onPress={onSelect}
      >
        <SC.Date>{day.date}</SC.Date>
      </SC.DateWrapper>
    </SC.DayWrapper>
  )
}

export default Day
