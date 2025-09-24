import React, { useEffect, useRef } from 'react'

const CircuitPattern: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const circuits: Array<{
      x: number
      y: number
      targetX: number
      targetY: number
      progress: number
      speed: number
    }> = []

    // Create circuit paths
    const createCircuit = () => {
      const startX = Math.random() * canvas.width
      const startY = Math.random() * canvas.height

      circuits.push({
        x: startX,
        y: startY,
        targetX: startX + (Math.random() - 0.5) * 200,
        targetY: startY + (Math.random() - 0.5) * 200,
        progress: 0,
        speed: 0.01 + Math.random() * 0.02
      })

      // Limit circuits
      if (circuits.length > 20) {
        circuits.shift()
      }
    }

    const drawCircuit = (circuit: typeof circuits[0]) => {
      const x = circuit.x + (circuit.targetX - circuit.x) * circuit.progress
      const y = circuit.y + (circuit.targetY - circuit.y) * circuit.progress

      // Draw the path
      ctx.beginPath()
      ctx.moveTo(circuit.x, circuit.y)

      // Create circuit-like path with 90-degree angles
      if (Math.random() > 0.5) {
        ctx.lineTo(x, circuit.y)
        ctx.lineTo(x, y)
      } else {
        ctx.lineTo(circuit.x, y)
        ctx.lineTo(x, y)
      }

      const gradient = ctx.createLinearGradient(circuit.x, circuit.y, x, y)
      gradient.addColorStop(0, 'rgba(0, 212, 255, 0)')
      gradient.addColorStop(0.5, 'rgba(0, 212, 255, 0.3)')
      gradient.addColorStop(1, 'rgba(0, 212, 255, 0)')

      ctx.strokeStyle = gradient
      ctx.lineWidth = 1
      ctx.stroke()

      // Draw nodes at corners
      ctx.beginPath()
      ctx.arc(circuit.x, circuit.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0, 212, 255, 0.5)'
      ctx.fill()

      if (circuit.progress > 0.5) {
        ctx.beginPath()
        ctx.arc(x, y, 2, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(0, 212, 255, 0.5)'
        ctx.fill()
      }

      // Draw moving dot
      const dotX = circuit.x + (circuit.targetX - circuit.x) * circuit.progress
      const dotY = circuit.y + (circuit.targetY - circuit.y) * circuit.progress

      ctx.beginPath()
      ctx.arc(dotX, dotY, 3, 0, Math.PI * 2)
      ctx.fillStyle = 'rgba(0, 212, 255, 1)'
      ctx.shadowBlur = 10
      ctx.shadowColor = 'rgba(0, 212, 255, 0.8)'
      ctx.fill()
      ctx.shadowBlur = 0
    }

    const animate = () => {
      ctx.fillStyle = 'rgba(10, 10, 10, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Occasionally create new circuits
      if (Math.random() < 0.02) {
        createCircuit()
      }

      // Update and draw circuits
      circuits.forEach((circuit, index) => {
        circuit.progress += circuit.speed

        if (circuit.progress < 1) {
          drawCircuit(circuit)
        } else {
          // Reset or remove completed circuits
          if (Math.random() > 0.5) {
            circuit.x = circuit.targetX
            circuit.y = circuit.targetY
            circuit.targetX = circuit.x + (Math.random() - 0.5) * 200
            circuit.targetY = circuit.y + (Math.random() - 0.5) * 200
            circuit.progress = 0
          } else {
            circuits.splice(index, 1)
          }
        }
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 2 }}
    />
  )
}

export default CircuitPattern