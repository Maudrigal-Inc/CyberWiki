import React from 'react'
import PropTypes from 'prop-types' // Aggiunto per la validazione delle proprietà

interface ButtonProps {
  href: string
  children: React.ReactNode
  className?: string // Aggiunto per permettere classi CSS personalizzate
}

const Button: React.FC<ButtonProps> = ({ href, children, className }) => {
  return (
    <a href={href} className={`btn ${className}`} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}

// Aggiunta la validazione delle proprietà
Button.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Button.defaultProps = {
  className: '', // Valore di default per className
}

export default Button