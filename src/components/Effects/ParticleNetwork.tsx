import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
}

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0 })
  const animationFrameRef = useRef<number | null>(null)

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

    // Initialize particles - fewer for cleaner look
    const particleCount = 40
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2, // Slower movement
        vy: (Math.random() - 0.5) * 0.2,
        radius: Math.random() * 1.5 + 0.5, // Smaller dots
        opacity: Math.random() * 0.5 + 0.2
      })
    }

    particlesRef.current = particles

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges instead of bouncing
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with subtle glow
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`
        ctx.fill()

        // Draw connections - more subtle
        particlesRef.current.forEach((particle2, j) => {
          if (i >= j) return // Avoid duplicate lines

          const dx = particle.x - particle2.x
          const dy = particle.y - particle2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(particle2.x, particle2.y)
            const opacity = 0.1 * (1 - distance / 120)
            ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        })

        // Subtle mouse interaction
        const mouseDx = particle.x - mouseRef.current.x
        const mouseDy = particle.y - mouseRef.current.y
        const mouseDistance = Math.sqrt(mouseDx * mouseDx + mouseDy * mouseDy)

        if (mouseDistance < 150) {
          // Gentle repulsion from mouse
          particle.vx += (particle.x - mouseRef.current.x) * 0.00001
          particle.vy += (particle.y - mouseRef.current.y) * 0.00001
        }

        // Limit velocity
        const maxSpeed = 0.5
        const speed = Math.sqrt(particle.vx * particle.vx + particle.vy * particle.vy)
        if (speed > maxSpeed) {
          particle.vx = (particle.vx / speed) * maxSpeed
          particle.vy = (particle.vy / speed) * maxSpeed
        }
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-60"
      style={{ zIndex: 1 }}
    />
  )
}

export default ParticleNetwork