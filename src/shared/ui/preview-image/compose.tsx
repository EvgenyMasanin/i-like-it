import {
  Box,
  Center,
  Flex,
  IconButton,
  Image,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'

import { ReactNode } from 'react'
import { IoIosClose } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight, FaRegEye } from 'react-icons/fa'

interface ComposeProps {
  handleOnMouseOver: () => void
  handleOnMouseLeave: () => void
  handleOnOverlayClick: () => void
  handlePreviewClose: () => void
  setIsPreviewShow: (isPreviewShow: boolean) => void
  nextImage: (direction: 'left' | 'right') => () => void
  overlayControls: ReactNode
  isOverlayVisible: boolean
  isPreviewShow: boolean
  src: string
  currentImageUrl: string
}

export const Compose = ({
  handleOnMouseLeave,
  handleOnMouseOver,
  handleOnOverlayClick,
  handlePreviewClose,
  setIsPreviewShow,
  nextImage,
  overlayControls,
  isPreviewShow,
  isOverlayVisible,
  currentImageUrl,
  src,
}: ComposeProps) => (
  <Box maxW={150} position="relative" cursor="pointer">
    <Box onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>
      <Image src={src} objectFit="cover" rounded="lg" inlineSize="full" aspectRatio={3 / 4} />
      <Center
        display={isOverlayVisible ? 'flex' : 'none'}
        backgroundColor="blackAlpha.700"
        position="absolute"
        inset={0}
        rounded="lg"
        onClick={handleOnOverlayClick}
      >
        <Flex alignItems="center" gap={1}>
          <FaRegEye /> <Text>Preview image</Text>
        </Flex>
        <Box position="absolute" top={1} right={1}>
          {overlayControls}
        </Box>
      </Center>
    </Box>
    <Modal
      isOpen={isPreviewShow}
      onClose={handlePreviewClose}
      isCentered
      size={{ base: 'full', lg: '8xl' }}
    >
      <ModalOverlay />
      <ModalContent m={0} maxW="80%">
        <ModalBody position="relative" p={0}>
          <Image
            order={2}
            maxH={{ base: '100vh', lg: '90vh' }}
            src={currentImageUrl}
            objectFit="contain"
            rounded="lg"
            inlineSize="full"
            aspectRatio={3 / 4}
          />
          <IconButton
            position="absolute"
            top={2}
            right={2}
            size="sm"
            fontSize="xx-large"
            variant="solid"
            icon={<IoIosClose />}
            aria-label="delete file"
            onClick={() => setIsPreviewShow(false)}
          />
          <IconButton
            position="absolute"
            top="50%"
            left={2}
            order={1}
            size="lg"
            fontSize="xx-large"
            variant="solid"
            icon={<FaArrowLeft />}
            aria-label="select previous image"
            onClick={nextImage('left')}
          />
          <IconButton
            position="absolute"
            top="50%"
            right={2}
            order={3}
            size="lg"
            fontSize="xx-large"
            variant="solid"
            icon={<FaArrowRight />}
            aria-label="select next image"
            onClick={nextImage('right')}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  </Box>
)
