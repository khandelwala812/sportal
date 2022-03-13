import React, { FC, useState } from "react"

import * as SC from "./styles"
import { TMeridiem } from "../../types"
import Text from "../Text"

interface ITimeFieldProps {
  name: string
}

const TimeField: FC<ITimeFieldProps> = ({ name, ...props }) => {
  const [meridiem, setMeridiem] = useState<TMeridiem>("")

  return (
    <SC.TimeFieldWrapper>
      <Text>{name}</Text>
      <SC.TimeField {...props} />
      <SC.ToggleWrapper>
        <SC.Toggle meridiem="am" current={meridiem} setCurrent={setMeridiem} />
        <SC.Toggle meridiem="pm" current={meridiem} setCurrent={setMeridiem} />
      </SC.ToggleWrapper>
    </SC.TimeFieldWrapper>
  )
}

export default TimeField
