import styled from "styled-components/native"
import BaseSilohouette from "../../components/Silhouette"

export const Wrapper = styled.View`
  display: flex;
  flex-direction: row;
`

export const Silhouette = styled(BaseSilohouette)`
  width: 20%;
  margin: 8px 32px;
  border-radius: 20px;
  filter: blur(3px);
`

export const Filler = styled.View`
  width: 20%;
`
