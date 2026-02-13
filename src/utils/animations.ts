export const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export const fadeInDown = {
    initial: { opacity: 0, y: -20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
}

export const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.5 }
}

export const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
}

export const cardHover = {
    whileHover: { scale: 1.05 },
    transition: { type: "spring" as const, stiffness: 300 }
}

export const cardHoverSmall = {
    whileHover: { scale: 1.02, y: -5 },
    transition: { type: "spring" as const, stiffness: 300 }
}

export const pageTransition = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.5 }
}

export const slideInLeft = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
}

export const slideInRight = {
    initial: { x: 60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.5 }
}

export const scaleIn = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 }
}

// Scroll-triggered animations (whileInView)
export const scrollFadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
}

export const scrollFadeIn = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
}

export const scrollScaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    whileInView: { scale: 1, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.5, ease: "easeOut" as const }
}

export const scrollSlideInLeft = {
    initial: { x: -60, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
}

export const scrollSlideInRight = {
    initial: { x: 60, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" as const }
}

export const staggerContainerScroll = {
    initial: {},
    whileInView: {
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.1
        }
    },
    viewport: { once: true, margin: "-50px" }
}

export const staggerItemScroll = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.4 }
} 