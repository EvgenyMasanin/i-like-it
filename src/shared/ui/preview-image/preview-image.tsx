import { ReactNode, useRef, useState } from 'react'

import { Compose } from './compose'

export interface PreviewImageProps {
  src: string
  overlayControls?: ReactNode
  imageCollectionUrls?: string[]
}

const useImageSlider = (defaultImageUrl: string, imageCollectionUrls: string[]) => {
  const initialImageUrlRef = useRef(
    imageCollectionUrls.findIndex((url) => url === defaultImageUrl) ?? 0
  )
  const [currentImageUrlIndex, setCurrentImageUrlIndex] = useState(initialImageUrlRef.current)
  const currentImageUrl = imageCollectionUrls[Math.abs(currentImageUrlIndex)] ?? defaultImageUrl

  const nextImage = (direction: 'left' | 'right') => () => {
    const directionValue = direction === 'left' ? -1 : 1

    if (imageCollectionUrls && Math.abs(currentImageUrlIndex) < imageCollectionUrls.length - 1) {
      setCurrentImageUrlIndex(currentImageUrlIndex + directionValue)
      return
    }

    setCurrentImageUrlIndex(0)
  }

  const setDefaultImageUrl = () => {
    setCurrentImageUrlIndex(initialImageUrlRef.current)
  }

  return {
    currentImageUrl,
    nextImage,
    setDefaultImageUrl,
  }
}

export const PreviewImage = ({ src, overlayControls, imageCollectionUrls }: PreviewImageProps) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false)
  const [isPreviewShow, setIsPreviewShow] = useState(false)

  const { currentImageUrl, nextImage, setDefaultImageUrl } = useImageSlider(
    src,
    imageCollectionUrls ?? []
  )

  const handleOnMouseOver = () => {
    setIsOverlayVisible(true)
  }

  const handleOnMouseLeave = () => {
    setIsOverlayVisible(false)
  }

  const handleOnOverlayClick = () => {
    setIsOverlayVisible(false)
    setIsPreviewShow(true)
  }

  const handlePreviewClose = () => {
    setIsPreviewShow(false)
    setDefaultImageUrl()
  }

  return (
    <Compose
      src={src}
      currentImageUrl={currentImageUrl}
      overlayControls={overlayControls}
      handleOnMouseLeave={handleOnMouseLeave}
      handleOnMouseOver={handleOnMouseOver}
      handleOnOverlayClick={handleOnOverlayClick}
      handlePreviewClose={handlePreviewClose}
      isOverlayVisible={isOverlayVisible}
      isPreviewShow={isPreviewShow}
      nextImage={nextImage}
      setIsPreviewShow={setIsPreviewShow}
    />
  )
}
