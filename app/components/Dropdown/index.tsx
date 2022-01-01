import React, { FC, Dispatch, SetStateAction, useState, useRef } from "react"

import useOutsideClicked from "../../hooks/useOutsideClicked"
import * as SC from "./styles"
import Text from "../Text"

interface IOption {
  name: string
  icon?: string
}

interface IDropdownProps {
  title?: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  options: IOption[]
}

const Dropdown: FC<IDropdownProps> = ({ title, value, setValue, options }) => {
  const dropdownRef = useRef(null)
  const [focused, setFocused] = useState<boolean>(false)
  const outsideClicked = useOutsideClicked(dropdownRef)
  const dropdownOptions = [{ name: "Any" }, ...options]

  const toggleFocus = () => setFocused(focused => !focused)

  const handleSelect = (newValue: string) => () => {
    setValue(newValue)
    toggleFocus()
  }

  return (
    <SC.Wrapper>
      {title && <SC.Title>{title}</SC.Title>}
      <SC.DropdownWrapper ref={dropdownRef} onPress={toggleFocus}>
        <SC.DropdownText>{value}</SC.DropdownText>
        <SC.EntypoIcon name="chevron-thin-down" size={24} color="black" />
      </SC.DropdownWrapper>
      {focused && !outsideClicked && (
        <SC.DropdownList
          data={dropdownOptions}
          keyExtractor={(_, i) => `k-${i}`}
          renderItem={({ item }) => {
            const option = item as IOption
            return (
              <SC.OptionWrapper onPress={handleSelect(option.name)}>
                <Text>{option.name}</Text>
                {option.name === value && (
                  <SC.MaterialIcon name="check" size={24} color="black" />
                )}
              </SC.OptionWrapper>
            )
          }}
        />
      )}
    </SC.Wrapper>
  )
}

export default Dropdown
