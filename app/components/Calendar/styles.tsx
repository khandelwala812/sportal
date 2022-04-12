import styled from "styled-components/native"
import { FC } from "react"
import { FlatList, FlatListProps } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Text from "../Text"

import { IDay, IDayOfWeek } from "../../types"
import colors from "../../config/colors"

export const CalendarWrapper = styled.View`
  border-right-width: 1px;
  border-right-color: ${({ selectedDay }) =>
    selectedDay ? colors.black : colors.background};
`

export const MonthWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 4px;
`

export const Month = styled(Text)`
  color: ${colors.black};
  font-size: 24px;
`

export const Chevron = styled(MaterialCommunityIcons)`
  margin: 0 4px;
`

export const DayOfWeekWrapper = styled.View`
  width: 50px;
  align-items: center;
  padding: 0 55px;
`

export const DayOfWeek = styled(Text)`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
`

export const Days: FC<FlatListProps<IDay | IDayOfWeek>> = props => (
  <FlatList {...props} contentContainerStyle={{ alignSelf: "center" }} />
)
