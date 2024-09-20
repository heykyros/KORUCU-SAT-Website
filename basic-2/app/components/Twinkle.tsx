"use client"

import React, { useRef, useEffect } from 'react'

const useAnimationFrame = (callback: () => void) => {
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()
  
  const animate = (time: number) => {
    if (previousTimeRef.current !== undefined) {
      callback()
    }
    previousTimeRef.current = time
    requestRef.current = requestAnimationFrame(animate)
  }
  
  useEffect(() => {
    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [])
}

interface Star {
  x: number
  y: number
  size: number
  opacity: number
  speed: number
  color: string
}

export default function TwinklingBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize stars
    const starCount = Math.floor((canvas.width * canvas.height) / 15000) // Reduced star density
    starsRef.current = Array.from({ length: starCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 0.5, // Slightly smaller stars
      opacity: Math.random(),
      speed: Math.random() * 0.002 + 0.001, // Much slower speed
      color: getStarColor()
    }))

    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  useAnimationFrame(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.clearRect(0, 0, canvas.width, canvas.height)

    starsRef.current.forEach(star => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(${star.color}, ${star.opacity})`
      ctx.fill()

      // Smoother, more realistic twinkling
      star.opacity += Math.sin(Date.now() * star.speed) * 0.05
      star.opacity = Math.max(0, Math.min(1, star.opacity))
    })
  })

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
      }}
    />
  )
}

function getStarColor(): string {
  const colors = [
    '255, 255, 255', // White
    '220, 220, 220', // Light Gray
    '192, 192, 192', // Silver
    '169, 169, 169', // Dark Gray
    '245, 245, 245', // White Smoke
    '230, 230, 250', // Lavender (for a slight color variation)
  ]
  return colors[Math.floor(Math.random() * colors.length)]
}