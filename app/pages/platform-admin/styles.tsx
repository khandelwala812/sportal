import styled from "rn-css"
import { FC } from "react"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import BasePageLayout from "../../layouts/PageLayout"
import Button from "../../components/Button"
import FormField from "../../components/FormField"
import SubmitButton from "../../components/SubmitButton"
import Text from "../../components/Text"
import TextInput from "../../components/TextInput"

import colors from "../../config/colors"

interface IAddEventButtonProps {
  title: string
}

export const PageLayout = styled(BasePageLayout)`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

export const Column = styled.View`
  width: 25%;
`

export const EventsWrapper = styled.View`
  width: 50%;
  align-items: center;
  padding-left: 16px;
  /* justify-content: center; */
`

export const EventsList = styled.FlatList`
  margin-bottom: 8px;
`

export const PlusButton = styled(Button)`
  width: 30px;
  height: 30px;
  align-self: center;
  margin: 4px;
  border-radius: 50%;
`

export const Plus = styled(MaterialCommunityIcons)``

export const FieldsWrapper = styled.View`
  align-items: flex-start;
  padding-left: 16px;
  gap: 4px;
`

export const NameField = styled(FormField)`
  background-color: none;
  color: ${colors.white};
  width: 200px;
  height: 30px;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${colors.white};

  &:focus {
    border: none;
    outline: none;
  }
`

export const LocationField = styled(NameField)`
  width: 180px;
  height: 20px;
`

export const TimeFieldWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 4px;
`

export const Description = styled(FormField)`
  background: ${colors.light};
  width: 200px;
  height: 50px;
  margin: 0;
  border: none;
  border-radius: 4px;
  font-size: 16px;
`

export const SaveButton = styled(SubmitButton)`
  margin: 0;
`

export const NoEventsText = styled(Text)`
  color: ${colors.white};
`

const ModifiedSubmitButton = styled(SubmitButton)`
  margin: 0;
  padding: 8px 16px;
`

export const AddEventButton: FC<IAddEventButtonProps> = ({
  title,
  ...props
}) => (
  <ModifiedSubmitButton title={title} textStyle={{ fontSize: 18 }} {...props} />
)
