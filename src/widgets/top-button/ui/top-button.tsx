import { Box, IconButton, Show } from '@chakra-ui/react'
import { AnimatePresence, MotionValue, motion, useMotionValueEvent } from 'framer-motion'
import { useRef, useState } from 'react'
import { BsArrowUpCircle } from 'react-icons/bs'

export interface TopButtonProps {
  scrollY: MotionValue<number>
  handleClick: () => void
}

export const TopButton = ({ scrollY, handleClick }: TopButtonProps) => {
  const [isUp, setIsUp] = useState(true)
  const prevScrollValue = useRef(Infinity)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const difference = prevScrollValue.current - latest

    prevScrollValue.current = latest
    setIsUp(difference > 0)
  })

  return (
    <Show below="sm">
      <AnimatePresence>
        {!isUp && (
          <Box
            as={motion.div}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            position="absolute"
            bottom={5}
            right={5}
          >
            <AnimatedButton
              onClick={handleClick}
              size="lg"
              rounded="full"
              icon={<BsArrowUpCircle />}
              aria-label="go-top"
              initial={{ scale: 1 }}
              animate={{
                scale: 1.3,
              }}
              exit={{ scale: 1 }}
              transition={{
                repeat: Infinity,
                duration: 0.5,
                repeatDelay: 5,
              }}
            />
          </Box>
        )}
      </AnimatePresence>
    </Show>
  )
}

const AnimatedButton = motion(IconButton)
