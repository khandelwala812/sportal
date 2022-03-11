import React, { FC } from "react"
import { FlatList } from "react-native"

import * as SC from "./styles"
import colors from "../../config/colors"

interface IStarsProps {
  number: number
}

const Stars: FC<IStarsProps> = ({ number }) => (
  <SC.StarsWrapper>
    <FlatList
      data={Array.from({ length: number })}
      horizontal
      keyExtractor={(_, i) => `k-${i}`}
      renderItem={() => <SC.Star name="star" size={18} color={colors.star} />}
    />
  </SC.StarsWrapper>
)

export default Stars
