"use client"

import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"

export default function AnimatedCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
    const [cursorVariant, setCursorVariant] = useState("default")
    const pathname = usePathname()

    // Reset cursor on every client-side navigation
    useEffect(() => {
        setCursorVariant("default")
    }, [pathname])

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY,
            })
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

    useEffect(() => {
        const handleMouseEnter = (e: MouseEvent) => {
            if ((e.target as Element).closest("a, button")) {
                setCursorVariant("link")
            }
        }
        const handleMouseLeave = (e: MouseEvent) => {
            if ((e.target as Element).closest("a, button")) {
                setCursorVariant("default")
            }
        }

        document.addEventListener("mouseover", handleMouseEnter)
        document.addEventListener("mouseout", handleMouseLeave)

        return () => {
            document.removeEventListener("mouseover", handleMouseEnter)
            document.removeEventListener("mouseout", handleMouseLeave)
        }
    }, [])

    const variants = {
        default: {
            x: mousePosition.x - 8,
            y: mousePosition.y - 8,
            height: 16,
            width: 16,
            backgroundColor: "rgba(99, 102, 241, 0.5)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
        },
        link: {
            x: mousePosition.x - 24,
            y: mousePosition.y - 24,
            height: 48,
            width: 48,
            backgroundColor: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.5)",
        },
    }

    return (
        <motion.div
            className="fixed top-0 left-0 rounded-full pointer-events-none z-[100] hidden md:block backdrop-blur-[2px]"
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28, mass: 0.5 }}
        />
    )
}
