import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="section-padding bg-background-secondary border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-xl font-bold font-heading">
              <span className="text-foreground">Nord</span>
              <span className="neural-text">AI</span>
            </span>
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-sm text-foreground-muted">
              © 2025 Nord AI. All rights reserved.
            </span>
            <a
              href="mailto:nordgaimer.ivan@gmail.com"
              className="text-sm text-foreground-muted hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-xs text-foreground-light">
            Built with premium AI solutions architecture
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer