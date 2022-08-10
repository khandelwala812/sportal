import React, { FC, useEffect, useRef, useState } from "react"
import { Animated } from "react-native"

import * as SC from "./styles"

const DEFAULT_GALLERY = [
  "https://cdn.pixabay.com/photo/2017/05/19/07/34/teacup-2325722__340.jpg",
  "https://cdn.pixabay.com/photo/2017/05/02/22/43/mushroom-2279558__340.jpg",
  "https://cdn.pixabay.com/photo/2017/05/18/21/54/tower-bridge-2324875__340.jpg",
  "https://cdn.pixabay.com/photo/2017/05/16/21/24/gorilla-2318998__340.jpg"
]

const IMAGE_DURATION = 6000

interface IGalleryProps {
  gallery?: string[]
}

const Gallery: FC<IGalleryProps> = ({ gallery }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current
  const [position, setPosition] = useState<number>(0)
  const currentGallery = gallery ?? DEFAULT_GALLERY

  const slideImage = () => {
    if (position < currentGallery.length - 1) {
      setPosition(position + 1)
    } else {
      setPosition(0)
    }
  }

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
      }),
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true
      })
    ]).start()
  }, [fadeAnim, position])

  useEffect(() => {
    const interval = setInterval(slideImage, IMAGE_DURATION)

    return () => clearInterval(interval)
  }, [position])

  return (
    <Animated.View style={{ opacity: fadeAnim }}>
      <SC.Image
        source={
          gallery
            ? require(`../../assets/${currentGallery[position]}`)
            : { uri: currentGallery[position] }
        }
      />
    </Animated.View>
  )
}

export default Gallery
