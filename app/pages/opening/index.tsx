import React, { FC, useState } from "react"

import routes from "../../config/routes"
import * as SC from "./styles"
import Dropdown from "../../components/Dropdown"
import Header from "../../components/Header"
import SearchBox from "../../components/SearchBox"
import { useNavigation } from "@react-navigation/native"

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

interface IIndexPageProps {
  navigation: {
    navigate: (route: string) => void
  }
}

const IndexPage: FC<IIndexPageProps> = ({ navigation }) => {
  const [location, setLocation] = useState<string>("")
  const [sport, setSport] = useState<string>("Any")
  const [age, setAge] = useState<string>("Any")
  const [level, setLevel] = useState<string>("Any")

  return (
    <SC.PageContainer>
      <Header />
      <SC.Spacer />
      <SC.BackgroundVideo
        source={require("../../assets/soccer.mp4")}
        shouldPlay
        isLooping
        resizeMode="cover"
      />
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
        </SC.InputContainer>
        <SC.SearchButton
          title="Search"
          color="medium"
          onPress={() => navigation.navigate(routes.HOME)}
        />
      </SC.SearchContainer>
    </SC.PageContainer>
  )
}

export default IndexPage
