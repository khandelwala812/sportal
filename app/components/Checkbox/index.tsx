import React, { FC } from "react"
import { TouchableWithoutFeedback } from "react-native"
import { CheckBox as BaseCheckbox } from "react-native-elements"

interface ICheckBoxProps {
  title: string
  checked: boolean
  onPress: () => void
}

const CheckBox: FC<ICheckBoxProps> = ({
  title,
  checked,
  onPress,
  ...props
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <BaseCheckbox title={title} checked={checked} {...props} />
    </TouchableWithoutFeedback>
  )
}

export default CheckBox
