import React from 'react'

interface NordAILogoProps {
  className?: string
}

const NordAILogo: React.FC<NordAILogoProps> = ({ className = "" }) => {
  return (
    <span className={className}>
      <span className="text-white">Nord</span>
      <span className="gradient-text">AI</span>
    </span>
  )
}

export default NordAILogo