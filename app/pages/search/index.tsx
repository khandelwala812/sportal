import React, { FC, useState } from "react"
import { useNavigation } from "@react-navigation/native"

import * as SC from "./styles"
import modals from "../../config/modals"
import routes from "../../config/routes"
import Dropdown from "../../components/Dropdown"
import ModalLayout from "../../layouts/ModalLayout"
import SearchBox from "../../components/SearchBox"

const sportOptions = [
  {
    name: "Any",
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
    name: "Any"
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
    name: "Any"
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
    name: "Any"
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

  const [location, setLocation] = useState<string>("")
  const [sport, setSport] = useState<string>("Any")
  const [age, setAge] = useState<string>("Any")
  const [level, setLevel] = useState<string>("Any")
  const [gender, setGender] = useState<string>("Any")

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
        <SC.SearchButton
          title="Search"
          color="medium"
          onPress={() => navigation.navigate(routes.HOME)}
        />
      </SC.SearchContainer>
    </ModalLayout>
  )
}

export default SearchPage
