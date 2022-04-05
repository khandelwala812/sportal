import React, { FC, useState } from "react"

import * as SC from "./styles"
import { TMeridiem } from "../../types"

interface ITimeFieldProps {
  name: string
  title: string
}

const TimeField: FC<ITimeFieldProps> = ({ name, title, ...props }) => {
  const [meridiem, setMeridiem] = useState<TMeridiem>("")

  return (
    <SC.TimeFieldWrapper>
      <SC.Title>{title}</SC.Title>
      <SC.TimeField name={name} {...props} />
      <SC.ToggleWrapper>
        <SC.Toggle meridiem="am" current={meridiem} setCurrent={setMeridiem} />
        <SC.Toggle meridiem="pm" current={meridiem} setCurrent={setMeridiem} />
      </SC.ToggleWrapper>
    </SC.TimeFieldWrapper>
  )
}

export default TimeField
