import React, { useEffect, useRef } from 'react'

interface Node3D {
  x: number
  y: number
  z: number
  vx: number
  vy: number
  vz: number
  radius: number
  layer: number
  activation: number
  pulsePhase: number
}

interface Connection3D {
  from: Node3D
  to: Node3D
  weight: number
  active: boolean
}

const NeuralNetwork3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node3D[]>([])
  const connectionsRef = useRef<Connection3D[]>([])
  const animationRef = useRef<number | null>(null)
  const mouseRef = useRef({ x: 0, y: 0 })
  const rotationRef = useRef({ x: 0, y: 0 })

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const updateCanvasSize = () => {
      const rect = container.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
    }

    updateCanvasSize()

    // Initialize 3D neural network
    const initializeNetwork = () => {
      const nodes: Node3D[] = []
      const connections: Connection3D[] = []

      // Create layers (input, hidden, output)
      const layers = [
        { count: 8, x: -200, color: '#00D4FF' },  // Input layer
        { count: 12, x: -50, color: '#38BDF8' },   // Hidden layer 1
        { count: 8, x: 100, color: '#06B6D4' },    // Hidden layer 2
        { count: 4, x: 250, color: '#0EA5E9' }     // Output layer
      ]

      layers.forEach((layer, layerIndex) => {
        for (let i = 0; i < layer.count; i++) {
          const y = (i - layer.count / 2) * 60
          const z = (Math.random() - 0.5) * 100

          nodes.push({
            x: layer.x,
            y: y,
            z: z,
            vx: (Math.random() - 0.5) * 0.1,
            vy: (Math.random() - 0.5) * 0.1,
            vz: (Math.random() - 0.5) * 0.1,
            radius: 6 + Math.random() * 4,
            layer: layerIndex,
            activation: Math.random(),
            pulsePhase: Math.random() * Math.PI * 2
          })
        }
      })

      // Create connections between layers
      for (let l = 0; l < layers.length - 1; l++) {
        const currentLayer = nodes.filter(n => n.layer === l)
        const nextLayer = nodes.filter(n => n.layer === l + 1)

        currentLayer.forEach(from => {
          nextLayer.forEach(to => {
            if (Math.random() > 0.3) { // 70% connection probability
              connections.push({
                from,
                to,
                weight: Math.random(),
                active: Math.random() > 0.5
              })
            }
          })
        })
      }

      nodesRef.current = nodes
      connectionsRef.current = connections
    }

    initializeNetwork()

    const project3D = (node: Node3D, rotX: number, rotY: number) => {
      // Apply rotation
      const cosX = Math.cos(rotX)
      const sinX = Math.sin(rotX)
      const cosY = Math.cos(rotY)
      const sinY = Math.sin(rotY)

      // Rotate around Y axis
      let x = node.x * cosY - node.z * sinY
      let z = node.x * sinY + node.z * cosY

      // Rotate around X axis
      let y = node.y * cosX - z * sinX
      z = node.y * sinX + z * cosX

      // Project to 2D with perspective
      const distance = 1000
      const scale = distance / (distance + z + 500)

      return {
        x: canvas.width / 2 + x * scale,
        y: canvas.height / 2 + y * scale,
        scale: scale
      }
    }

    const drawConnection = (conn: Connection3D, rotX: number, rotY: number) => {
      const from = project3D(conn.from, rotX, rotY)
      const to = project3D(conn.to, rotX, rotY)

      if (from.scale > 0.1 && to.scale > 0.1) {
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)

        const opacity = Math.min(from.scale, to.scale) * conn.weight * 0.5
        if (conn.active) {
          ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`
          ctx.lineWidth = 2 * Math.min(from.scale, to.scale)
        } else {
          ctx.strokeStyle = `rgba(100, 116, 139, ${opacity * 0.3})`
          ctx.lineWidth = 1 * Math.min(from.scale, to.scale)
        }
        ctx.stroke()
      }
    }

    const drawNode = (node: Node3D, rotX: number, rotY: number) => {
      const projected = project3D(node, rotX, rotY)

      if (projected.scale > 0.1) {
        const size = node.radius * projected.scale
        const pulse = 1 + Math.sin(node.pulsePhase) * 0.3

        // Draw node glow
        ctx.beginPath()
        ctx.arc(projected.x, projected.y, size * pulse * 1.5, 0, Math.PI * 2)
        const gradient = ctx.createRadialGradient(
          projected.x, projected.y, 0,
          projected.x, projected.y, size * pulse * 1.5
        )
        gradient.addColorStop(0, `rgba(0, 212, 255, ${0.3 * projected.scale})`)
        gradient.addColorStop(1, 'rgba(0, 212, 255, 0)')
        ctx.fillStyle = gradient
        ctx.fill()

        // Draw node core
        ctx.beginPath()
        ctx.arc(projected.x, projected.y, size * pulse, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 212, 255, ${0.8 + node.activation * 0.2})`
        ctx.fill()

        // Draw activation ring
        if (node.activation > 0.7) {
          ctx.beginPath()
          ctx.arc(projected.x, projected.y, size * pulse * 1.3, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(255, 255, 0, ${(node.activation - 0.7) * 3 * projected.scale})`
          ctx.lineWidth = 2 * projected.scale
          ctx.stroke()
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY }
    }

    window.addEventListener('mousemove', handleMouseMove)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update rotation based on mouse
      rotationRef.current.y += (mouseRef.current.x / canvas.width - 0.5) * 0.01
      rotationRef.current.x += (mouseRef.current.y / canvas.height - 0.5) * 0.01

      // Auto-rotation
      rotationRef.current.y += 0.002
      rotationRef.current.x = Math.sin(Date.now() * 0.0005) * 0.1

      // Update nodes
      nodesRef.current.forEach(node => {
        node.pulsePhase += 0.05

        // Random activation changes
        if (Math.random() < 0.01) {
          node.activation = Math.max(0, Math.min(1, node.activation + (Math.random() - 0.5) * 0.3))
        }

        // Subtle movement
        node.x += node.vx
        node.y += node.vy
        node.z += node.vz

        // Keep nodes near their layer
        const targetX = [-200, -50, 100, 250][node.layer]
        node.vx += (targetX - node.x) * 0.001
      })

      // Update connections
      connectionsRef.current.forEach(conn => {
        if (Math.random() < 0.005) {
          conn.active = !conn.active
        }
      })

      // Draw connections first (behind nodes)
      connectionsRef.current.forEach(conn => {
        drawConnection(conn, rotationRef.current.x, rotationRef.current.y)
      })

      // Draw nodes
      // Sort by z-depth for proper layering
      const sortedNodes = [...nodesRef.current].sort((a, b) => {
        const aZ = a.z * Math.cos(rotationRef.current.y) + a.x * Math.sin(rotationRef.current.y)
        const bZ = b.z * Math.cos(rotationRef.current.y) + b.x * Math.sin(rotationRef.current.y)
        return bZ - aZ
      })

      sortedNodes.forEach(node => {
        drawNode(node, rotationRef.current.x, rotationRef.current.y)
      })

      // Draw info text
      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)'
      ctx.font = '12px monospace'
      ctx.fillText(`Nodes: ${nodesRef.current.length}`, 20, 30)
      ctx.fillText(`Connections: ${connectionsRef.current.length}`, 20, 50)
      ctx.fillText('Neural Network Training...', 20, 70)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      updateCanvasSize()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <div ref={containerRef} className="absolute inset-0">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none opacity-40"
        style={{ zIndex: 1 }}
      />
    </div>
  )
}

export default NeuralNetwork3D