import React, { FC } from "react"
import { Image } from "react-native"

interface ISilhouetteProps {
  style?: object
}

const Silhouette: FC<ISilhouetteProps> = ({ style }) => {
  const randomNumber = Math.ceil(Math.random() * 5)

  return (
    <Image
      source={require(`../../assets/silhouette-${randomNumber}.jpg`)}
      style={style}
    />
  )
}

export default Silhouette
