import React, { FC } from "react"
import { TouchableOpacity } from "react-native"
// import BaseCheckBox from "@react-native-community/checkbox"

interface ICheckBoxProps {
  title: string
  value: boolean
  onPress: () => void
}

const CheckBox: FC<ICheckBoxProps> = ({ title, value, onPress, ...props }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {/* <BaseCheckBox value={value} {...props} /> */}
    </TouchableOpacity>
  )
}

export default CheckBox
