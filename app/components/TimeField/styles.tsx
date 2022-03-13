import styled from "styled-components/native"
import { FC } from "react"
import Text from "../Text"
import TextInput from "../TextInput"

import { TMeridiem } from "../../types"
import colors from "../../config/colors"

export const TimeFieldWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
  margin-bottom: 4px;
`

export const TimeField = styled(TextInput)`
  background-color: none;
  width: 55px;
  height: 25px;
  justify-content: flex-end;
  padding: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;

  &:focus {
    border: none;
    outline: none;
  }
`

export const ToggleWrapper = styled.View`
  flex-direction: row;
  gap: 8px;
`

const MeridiemWrapper = styled.TouchableOpacity`
  width: 25px;
  width: 25px;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`

interface IToggleProps {
  meridiem: TMeridiem
  current: TMeridiem
  setCurrent: (m: TMeridiem) => void
}

export const Toggle: FC<IToggleProps> = ({ meridiem, current, setCurrent }) => {
  const handleToggle = () => {
    setCurrent(meridiem === current ? "" : meridiem)
  }

  return (
    <MeridiemWrapper
      style={{ backgroundColor: meridiem === current && colors.light }}
      onPress={handleToggle}
    >
      <Text>{meridiem}</Text>
    </MeridiemWrapper>
  )
}
