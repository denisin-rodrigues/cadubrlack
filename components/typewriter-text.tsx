"use client"

import { useState, useEffect } from "react"

interface TypewriterTextProps {
  text: string
  start: boolean
  delay?: number
  onComplete?: () => void
}

export function TypewriterText({ text, start, delay = 50, onComplete }: TypewriterTextProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (!start) {
      setDisplayText(text) // Show full text immediately if start is false
      return
    }

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    } else if (onComplete) {
      onComplete()
    }
  }, [currentIndex, text, start, delay, onComplete])

  useEffect(() => {
    if (start) {
      setDisplayText("")
      setCurrentIndex(0)
    }
  }, [start])

  return <span>{displayText}</span>
}
