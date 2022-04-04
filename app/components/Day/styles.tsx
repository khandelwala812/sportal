import styled from "rn-css"
import { css } from "styled-components/native"
import Text from "../Text"

import colors from "../../config/colors"

export const LargeDayWrapper = styled.View`
  width: 10rem;
  height: 10rem;
  border: 1px solid ${colors.light};
`

export const DayWrapper = styled.View`
  height: 50px;
  width: 50px;
  align-items: center;
  justify-content: center;
  padding: 40px 55px;
`

const hoverDateCSS = css`
  &:hover {
    border: 1px solid white;
  }
`

export const DateWrapper = styled.TouchableOpacity`
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 5px;
  box-shadow: ${props =>
    props.selected && "0px 4px 4px 3px rgba(255, 255, 255, 0.5)"};

  ${props => !props.filler && hoverDateCSS}
`

export const Date = styled(Text)`
  color: inherit;
  font-size: 30px;
  font-weight: 400;
  line-height: 35px;
`
