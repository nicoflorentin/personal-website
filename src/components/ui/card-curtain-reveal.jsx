import * as React from "react"
import { motion } from "motion/react";

import { cn } from "@/lib/utils"

const curtainVriants = {
  visible: {
    clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
    transition: {
      duration: 0.4,
      ease: ["easeOut", [0.25, 1.5, 0.5, 1]],
    },
  },

  hidden: {
    clipPath: "polygon(50% 0,50% 0,50% 100%,50% 100%)",
    transition: {
      duration: 0.3,
      ease: ["easeOut", [0.25, 1.5, 0.5, 1]],
    },
  },
}

const CardCurtainRevealContext = React.createContext(undefined)
function useCardCurtainRevealContext() {
  const context = React.useContext(CardCurtainRevealContext)
  if (!context) {
    throw new Error(
      "useCardCurtainRevealContext must be used within a CardCurtainReveal Component"
    )
  }
  return context
}

const CardCurtainReveal = React.forwardRef(({ children, className, isMobile = false, ...props }, ref) => {
  const [internalMouseIn, setInternalMouseIn] = React.useState(false)

  // En mobile, siempre mostrar el efecto abierto (isMouseIn = true)
  // En desktop, usar el estado interno del hover
  const isMouseIn = isMobile ? true : internalMouseIn

  const handleMouseEnter = React.useCallback(() => setInternalMouseIn(true), [])
  const handleMouseLeave = React.useCallback(() => setInternalMouseIn(false), [])

  return (
    <CardCurtainRevealContext.Provider value={{ isMouseIn }}>
      <div
        ref={ref}
        className={cn("relative flex flex-col overflow-hidden", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...props}>
        {children}
      </div>
    </CardCurtainRevealContext.Provider>
  );
})
CardCurtainReveal.displayName = "CardCurtainReveal"

const CardCurtainRevealFooter = React.forwardRef(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={curtainVriants}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props} />
  );
})
CardCurtainRevealFooter.displayName = "CardCurtainReveal"

const CardCurtainRevealBody = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={cn("flex-1 py-0 px-2", className)} {...props} />;
})
CardCurtainRevealBody.displayName = "CardCurtainRevealBody"

const CardCurtainRevealTitle = React.forwardRef(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.h2
      ref={ref}
      className={className}
      animate={isMouseIn ? { y: 0 } : { y: 150 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      {...props} />
  );
})
CardCurtainRevealTitle.displayName = "CardCurtainRevealTitle"

const CardCurtain = React.forwardRef(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={cn(
        "pointer-events-none absolute inset-0 size-full mix-blend-difference",
        className
      )}
      variants={curtainVriants}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props} />
  );
})
CardCurtain.displayName = "CardCurtain"

const CardCurtainRevealDescription = React.forwardRef(({ className, ...props }, ref) => {
  const { isMouseIn } = useCardCurtainRevealContext()

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={curtainVriants}
      animate={isMouseIn ? "visible" : "hidden"}
      {...props} />
  );
})
CardCurtainRevealDescription.displayName = "CardCurtainRevealDescription"

export {
  CardCurtainReveal,
  CardCurtainRevealBody,
  CardCurtainRevealFooter,
  CardCurtainRevealDescription,
  CardCurtainRevealTitle,
  CardCurtain,
}
