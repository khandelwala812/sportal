import React, { FC, useState } from "react"

import * as SC from "./styles"
import Header from "../../components/Header"
import SearchBox from "../../components/SearchBox"
import Dropdown from "../../components/Dropdown"

const sportsOptions = [
  {
    name: "Baseball"
  },
  {
    name: "Basketball"
  },
  {
    name: "Football"
  },
  {
    name: "Soccer"
  }
]

const ageOptions = [
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
    name: "Beginner"
  },
  {
    name: "Intermediate"
  },
  {
    name: "Advanced"
  }
]

const IndexPage: FC = () => {
  const [location, setLocation] = useState<string>("")
  const [sport, setSport] = useState<string>("Any")
  const [age, setAge] = useState<string>("Any")
  const [level, setLevel] = useState<string>("Any")

  return (
    <SC.PageContainer>
      <Header />
      <SC.Spacer />
      <SC.SearchContainer color="light">
        <SC.InputContainer>
          <SearchBox input={location} setInput={setLocation} />
          <Dropdown
            title="Sport"
            value={sport}
            setValue={setSport}
            options={sportsOptions}
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
        </SC.InputContainer>
        <SC.SearchButton title="Search" color="medium" />
      </SC.SearchContainer>
    </SC.PageContainer>
  )
}

export default IndexPage
