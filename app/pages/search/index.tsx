import React, { FC, useState } from "react"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import { ALL_ITEMS_LABEL } from "../../config/constants"
import modals from "../../config/modals"
import routes from "../../config/routes"
import useModal from "../../hooks/useModal"
import Dropdown from "../../components/Dropdown"
import ModalLayout from "../../layouts/ModalLayout"
import SearchBox from "../../components/SearchBox"

const sportOptions = [
  {
    name: ALL_ITEMS_LABEL,
    icon: "flask-empty-outline"
  },
  {
    name: "Baseball",
    icon: "baseball-bat"
  },
  {
    name: "Basketball",
    icon: "basketball"
  },
  {
    name: "Football",
    icon: "football"
  },
  {
    name: "Soccer",
    icon: "soccer"
  }
]

const ageOptions = [
  {
    name: ALL_ITEMS_LABEL
  },
  {
    name: "12-14"
  },
  {
    name: "14-16"
  },
  {
    name: "16+"
  }
]

const levelOptions = [
  {
    name: ALL_ITEMS_LABEL
  },
  {
    name: "Beginner"
  },
  {
    name: "Intermediate"
  },
  {
    name: "Advanced"
  }
]

const genderOptions = [
  {
    name: ALL_ITEMS_LABEL
  },
  {
    name: "Male"
  },
  {
    name: "Female"
  }
]

const SearchPage: FC = () => {
  const navigation = useNavigation()
  const { toggleModal } = useModal()

  const [location, setLocation] = useState<string>("")
  const [sport, setSport] = useState<string>(ALL_ITEMS_LABEL)
  const [age, setAge] = useState<string>(ALL_ITEMS_LABEL)
  const [level, setLevel] = useState<string>(ALL_ITEMS_LABEL)
  const [gender, setGender] = useState<string>(ALL_ITEMS_LABEL)

  const handleSearch = () => {
    navigation.navigate(routes.HOME)
    toggleModal(modals.SEARCH)
  }

  return (
    <ModalLayout name={modals.SEARCH}>
      <SC.SearchContainer color="translucent">
        <SC.InputContainer>
          <SearchBox input={location} setInput={setLocation} />
          <Dropdown
            title="Sport"
            value={sport}
            setValue={setSport}
            options={sportOptions}
            isContext
          />
          <Dropdown
            title="Age"
            value={age}
            setValue={setAge}
            options={ageOptions}
          />
          <Dropdown
            title="Level"
            value={level}
            setValue={setLevel}
            options={levelOptions}
          />
          <Dropdown
            title="Gender"
            value={gender}
            setValue={setGender}
            options={genderOptions}
          />
        </SC.InputContainer>
        <SC.SearchButton title="Search" color="medium" onPress={handleSearch} />
      </SC.SearchContainer>
    </ModalLayout>
  )
}

export default SearchPage
