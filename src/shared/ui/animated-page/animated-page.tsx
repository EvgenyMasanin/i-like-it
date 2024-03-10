import { motion } from 'framer-motion'

import { PropsWithChildren } from 'react'

export interface AnimatedPageProps extends PropsWithChildren {}

export const AnimatedPage = ({ children }: AnimatedPageProps) => (
  <motion.div
    className="animatedDiv"
    initial={{
      opacity: 0,
      y: 20,
    }}
    animate={{
      opacity: 1,
      y: 0,
    }}
    exit={{
      opacity: 0,
      y: 20,
    }}
  >
    {children}
  </motion.div>
)
