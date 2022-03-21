import styled from "rn-css"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import BasePageLayout from "../../layouts/PageLayout"
import Button from "../../components/Button"
import FormField from "../../components/FormField"
import SubmitButton from "../../components/SubmitButton"

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
  align-items: flex-start;
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
  border-radius: 50%;
`

export const Plus = styled(MaterialCommunityIcons)``

export const FieldsWrapper = styled.View`
  align-items: flex-start;
  gap: 4px;
`

export const AddEventButton = styled(SubmitButton)`
  margin: 0;
`

export const NameField = styled(FormField)`
  background-color: none;
  width: 200px;
  height: 30px;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid black;

  &:focus {
    border: none;
    outline: none;
  }
`

export const TimeFieldWrapper = styled.View`
  flex-direction: row;
  align-items: flex-end;
  gap: 8px;
`
