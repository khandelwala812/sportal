import styled from "styled-components/native"

import colors from "../../config/colors"

export const HeaderWrapper = styled.View`
  background: ${colors.light};
  width: 100%;
  height: 50px;
  position: fixed;
  top: 50;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px;
  padding-top: 32px;
  z-index: 1;
`

export const LogoWrapper = styled.Pressable`
  position: absolute;
  top: 0;
  left: 16px;
`

export const ListWrapper = styled.View`
  height: 50px;
  align-self: center;
`

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
