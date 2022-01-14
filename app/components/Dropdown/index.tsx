import React, { FC, Dispatch, SetStateAction, useState, useRef } from "react"

import useFilters from "../../hooks/useFilters"
import useOutsideClicked from "../../hooks/useOutsideClicked"
import * as SC from "./styles"
import Text from "../Text"

interface IOption {
  name: string
  icon?: string
}

interface IDropdownProps {
  title: string
  value: string
  setValue: Dispatch<SetStateAction<string>>
  options: IOption[]
  isContext?: boolean
}

const Dropdown: FC<IDropdownProps> = ({
  title,
  value,
  setValue,
  options,
  isContext
}) => {
  const { setFilters } = useFilters()
  const dropdownRef = useRef(null)
  const [focused, setFocused] = useState<boolean>(false)
  const outsideClicked = useOutsideClicked(dropdownRef)

  const toggleFocus = () => setFocused(focused => !focused)

  const handleSelect = (newValue: string) => () => {
    setValue(newValue)
    toggleFocus()

    if (isContext) {
      setFilters((filters: object) => ({
        ...filters,
        [title.toLowerCase()]: newValue
      }))
    }
  }

  return (
    <SC.Wrapper ref={dropdownRef}>
      {title && <SC.Title>{title}</SC.Title>}
      <SC.DropdownWrapper onPress={toggleFocus}>
        <SC.DropdownText>{value}</SC.DropdownText>
        <SC.Chevron name="chevron-thin-down" size={24} color="black" />
      </SC.DropdownWrapper>
      {focused && !outsideClicked && (
        <SC.DropdownList
          data={options}
          keyExtractor={(_, i) => `k-${i}`}
          renderItem={({ item }) => {
            const option = item as IOption
            return (
              <SC.OptionWrapper onPress={handleSelect(option.name)}>
                {option.icon && (
                  <SC.OptionIcon
                    name={option.icon}
                    size={24}
                    color={option.name === "Any" ? "white" : "black"}
                  />
                )}
                <Text>{option.name}</Text>
                {option.name === value && (
                  <SC.Checkmark name="check" size={24} color="black" />
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
