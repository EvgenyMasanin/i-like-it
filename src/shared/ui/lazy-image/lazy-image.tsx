import { Box, Center, Icon, Image, ResponsiveValue, Skeleton } from '@chakra-ui/react'

import { useState } from 'react'
// eslint-disable-next-line import/no-extraneous-dependencies
import { Property } from 'csstype' // from chakra-ui
import { FaImage } from 'react-icons/fa'

export interface LazyImageProps {
  src: string
  alt?: string
  aspectRatio?: number
  objectFit?: ResponsiveValue<Property.ObjectFit>
}

export const LazyImage = ({ src, aspectRatio, objectFit = 'cover', alt }: LazyImageProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [isCorrectSrc, setIsCorrectSrc] = useState(!!src)

  const handleImageLoad = () => {
    setIsImageLoaded(true)
  }

  const handleImageError = () => {
    handleImageLoad()
    setIsCorrectSrc(false)
  }

  return (
    <Box position="relative" rounded="inherit">
      <Center
        position="absolute"
        bg="gray.100"
        rounded="inherit"
        inset={0}
        display={isImageLoaded || !isCorrectSrc ? 'none' : 'flex'}
      >
        <Skeleton w="full" h="full" bg="Background" rounded="inherit" />
        <Icon position="absolute" boxSize="70%" as={FaImage} />
      </Center>
      {isCorrectSrc ? (
        <Image
          loading="lazy"
          src={src}
          alt={alt}
          aspectRatio={aspectRatio}
          objectFit={objectFit}
          rounded="inherit"
          onLoad={handleImageLoad}
          onError={handleImageError}
        />
      ) : (
        <Icon position="absolute" boxSize="full" as={FaImage} />
      )}
    </Box>
  )
}
