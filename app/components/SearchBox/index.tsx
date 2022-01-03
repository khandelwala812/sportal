import React, {
  FC,
  useState,
  useRef,
  ChangeEvent,
  Dispatch,
  SetStateAction
} from "react"
import { TouchableOpacity } from "react-native"
import axios from "axios"

import useOutsideClicked from "../../hooks/useOutsideClicked"
import * as SC from "./styles"
import colors from "../../config/colors"
import {
  CORS_SERVER_URL,
  GOOGLE_PlACE_SEARCH_URL,
  GOOGLE_PLACE_DETAILS_URL
} from "../../config/constants"
import Icon from "../Icon"
import TextInput from "../TextInput"

interface IPlace {
  formatted_address: string
  place_id: string
}

interface IAddressComponent {
  short_name: string
  types: string[]
}

interface IPlaceDetails {
  address_components: IAddressComponent[]
}

interface ISearchBoxProps {
  input: string
  setInput: Dispatch<SetStateAction<string>>
}

const SearchBox: FC<ISearchBoxProps> = ({ input, setInput }) => {
  const searchBoxRef = useRef(null)
  const [results, setResults] = useState<IPlace[] | null>(null)
  const outsideClicked = useOutsideClicked(searchBoxRef)

  const fetchResults = async (e: ChangeEvent<HTMLInputElement>) => {
    const newInput = e.target.value
    setInput(newInput)

    if (!newInput.length) {
      setResults(null)
      return
    }

    const response = await axios.get(
      `${CORS_SERVER_URL}/${GOOGLE_PlACE_SEARCH_URL}&query=${newInput}&location=40.788460,-73.981060&radius=50000`
    )
    setResults(response.data.results.slice(0, 6))
  }

  const formatAddress = (details: IPlaceDetails) => {
    let streetNumber, streetName, city

    for (const component of details.address_components) {
      if (component.types.includes("street_number"))
        streetNumber = component.short_name
      else if (component.types.includes("route"))
        streetName = component.short_name
      else if (
        component.types.includes("sublocality") ||
        component.types.includes("locality")
      )
        city = component.short_name
    }

    return `${streetNumber} ${streetName}, ${city}`
  }

  const handleSelect = (place: IPlace) => async () => {
    const response = await axios.get(
      `${CORS_SERVER_URL}/${GOOGLE_PLACE_DETAILS_URL}&place_id=${place.place_id}`
    )

    setInput(formatAddress(response.data.result))
    setResults(null)
  }

  return (
    <SC.SearchBoxWrapper ref={searchBoxRef}>
      <TextInput
        title="Location"
        value={input}
        placeholder="Enter a location"
        placeholderTextColor={colors.light}
        left={<Icon name="magnifying-glass" />}
        onChange={fetchResults}
      />
      {Boolean(results?.length) && !outsideClicked && (
        <SC.AutocompleteList
          data={results}
          keyExtractor={(_, i) => `k-${i}`}
          renderItem={({ item }) => {
            const result = item as IPlace
            return (
              <TouchableOpacity onPress={handleSelect(result)}>
                <SC.ResultText>{result.formatted_address}</SC.ResultText>
              </TouchableOpacity>
            )
          }}
        />
      )}
    </SC.SearchBoxWrapper>
  )
}

export default SearchBox
