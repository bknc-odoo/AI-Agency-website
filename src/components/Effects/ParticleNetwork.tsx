import React, { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  pulsePhase: number
}

interface DataFlow {
  from: Particle
  to: Particle
  progress: number
  active: boolean
}

const ParticleNetwork: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const dataFlowsRef = useRef<DataFlow[]>([])
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
        opacity: Math.random() * 0.5 + 0.2,
        pulsePhase: Math.random() * Math.PI * 2
      })
    }

    particlesRef.current = particles

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create random data flows
      if (Math.random() < 0.02 && particlesRef.current.length > 1) {
        const fromIndex = Math.floor(Math.random() * particlesRef.current.length)
        const toIndex = Math.floor(Math.random() * particlesRef.current.length)

        if (fromIndex !== toIndex) {
          const distance = Math.sqrt(
            Math.pow(particlesRef.current[fromIndex].x - particlesRef.current[toIndex].x, 2) +
            Math.pow(particlesRef.current[fromIndex].y - particlesRef.current[toIndex].y, 2)
          )

          if (distance < 200) {
            dataFlowsRef.current.push({
              from: particlesRef.current[fromIndex],
              to: particlesRef.current[toIndex],
              progress: 0,
              active: true
            })
          }
        }
      }

      // Update and draw data flows
      dataFlowsRef.current = dataFlowsRef.current.filter(flow => {
        if (flow.active) {
          flow.progress += 0.03

          if (flow.progress <= 1) {
            // Draw data packet
            const x = flow.from.x + (flow.to.x - flow.from.x) * flow.progress
            const y = flow.from.y + (flow.to.y - flow.from.y) * flow.progress

            ctx.beginPath()
            ctx.arc(x, y, 2, 0, Math.PI * 2)
            ctx.fillStyle = 'rgba(255, 255, 0, 0.8)'
            ctx.shadowBlur = 10
            ctx.shadowColor = 'rgba(255, 255, 0, 0.5)'
            ctx.fill()
            ctx.shadowBlur = 0

            return true
          }
        }
        return false
      })

      // Update and draw particles
      particlesRef.current.forEach((particle, i) => {
        // Update position
        particle.x += particle.vx
        particle.y += particle.vy
        particle.pulsePhase += 0.05

        // Wrap around edges instead of bouncing
        if (particle.x < 0) particle.x = canvas.width
        if (particle.x > canvas.width) particle.x = 0
        if (particle.y < 0) particle.y = canvas.height
        if (particle.y > canvas.height) particle.y = 0

        // Draw particle with pulsing effect
        const pulseSize = particle.radius + Math.sin(particle.pulsePhase) * 0.5
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, pulseSize, 0, Math.PI * 2)
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