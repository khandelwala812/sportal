import styled from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const SearchBoxWrapper = styled.View`
  display: flex;
  margin: 0 32px;
`

export const AutocompleteList = styled.FlatList`
  background-color: ${colors.white};
  width: 500px;
  margin-top: 4px;
  padding: 4px;
  border-radius: 5px;
`

export const ResultText = styled(Text)`
  font-size: 16px;
`
