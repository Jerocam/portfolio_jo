"use client";
import React, { forwardRef} from 'react'
import { motion, HTMLMotionProps } from 'framer-motion'

type PageTransitionProps = HTMLMotionProps<'div'>
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
};

function PageTransition({ children, ...rest }: PageTransitionProps, ref: PageTransitionRef) {
	return (
		<motion.main
      ref={ref}
      variants={variants}
      initial="hidden"
      animate="enter"
      transition={{ type: "linear" }}
      {...rest}
    >
      {children}
    </motion.main>
	)
}


export default forwardRef(PageTransition)