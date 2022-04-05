import styled from "styled-components/native"
import { FC } from "react"
import Text from "../Text"
import FormField from "../FormField"

import { TMeridiem } from "../../types"
import colors from "../../config/colors"

export const TimeFieldWrapper = styled.View`
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`

export const Title = styled(Text)`
  color: ${colors.white};
`

export const TimeField = styled(FormField)`
  background-color: none;
  color: white;
  width: 55px;
  height: 25px;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;
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
      style={{ backgroundColor: meridiem === current && colors.medium }}
      onPress={handleToggle}
    >
      <Text style={{ color: colors.white }}>{meridiem}</Text>
    </MeridiemWrapper>
  )
}
