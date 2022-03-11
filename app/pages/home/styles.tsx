import styled from "styled-components/native"
import Container from "../../components/Container"

export const Silhouette = styled.Image`
  width: 20%;
  margin-top: 8px;
  margin-left: 32px;
  border-radius: 20px;
  filter: blur(3px);
`

export const Filler = styled.View`
  width: 20%;
`

export const Wrapper = styled(Container)`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
`

export const CardListWrapper = styled.View`
  flex: 1;
`

export const CardList = styled.FlatList``
