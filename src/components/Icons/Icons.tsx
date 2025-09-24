import React from 'react'

interface IconProps {
  className?: string
  size?: number
}

export const StrategyIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <path d="M12 1v6m0 10v6m11-7h-6M6 12H1" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const RobotIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="4" y="8" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <path d="M12 5v3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="12" cy="2" r="1" fill="currentColor"/>
    <circle cx="9" cy="12" r="1" fill="currentColor"/>
    <circle cx="15" cy="12" r="1" fill="currentColor"/>
    <path d="M9 16h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M4 13h-2m20 0h-2" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const AnalyticsIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M3 3v18h18" stroke="currentColor" strokeWidth="2"/>
    <rect x="7" y="12" width="3" height="8" fill="currentColor" opacity="0.3"/>
    <rect x="12" y="8" width="3" height="12" fill="currentColor" opacity="0.5"/>
    <rect x="17" y="5" width="3" height="15" fill="currentColor" opacity="0.7"/>
    <path d="M7 12l5-4 4-3" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="7" cy="12" r="2" fill="currentColor"/>
    <circle cx="12" cy="8" r="2" fill="currentColor"/>
    <circle cx="16" cy="5" r="2" fill="currentColor"/>
  </svg>
)

export const AutomationIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1" opacity="0.3" fill="none"/>
  </svg>
)

export const SearchIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <circle cx="11" cy="11" r="5" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="11" cy="11" r="2" fill="currentColor"/>
    <path d="21 21l-4.35-4.35" stroke="currentColor" strokeWidth="2"/>
  </svg>
)

export const TargetIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 2v4m0 12v4M2 12h4m12 0h4" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

export const CodeIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <path d="M8 10l-2 2 2 2m8-4l2 2-2 2m-4-6l-2 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

export const RocketIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M9 12H4s3-7 5-7 1 3 1 3-1 2-1 4zm3 3v5s7-3 7-5-3-1-3-1-2 1-4 1z" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)

export const SpeedIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <path d="M8 12l4-4 4 4-4 4z" fill="currentColor"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
  </svg>
)

export const CustomIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.2"/>
    <circle cx="12" cy="12" r="3" fill="currentColor"/>
    <path d="M12 8v8m-4-4h8" stroke="currentColor" strokeWidth="1" opacity="0.7"/>
  </svg>
)

export const SupportIcon: React.FC<IconProps> = ({ className = "", size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="currentColor" opacity="0.1"/>
    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="12" cy="12" r="2" fill="currentColor"/>
    <path d="M12 2v2m0 16v2m10-10h-2M4 12H2" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
  </svg>
)