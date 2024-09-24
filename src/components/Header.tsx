'use client'

import React, { useState } from 'react'
import NavLink from './NavLink'

interface HeaderProps {
  darkMode: boolean
  setDarkMode: (darkMode: boolean) => void
}

const Header: React.FC<HeaderProps> = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header>
      <nav className="container">
        <h1>CyberHarmonix</h1>
        <ul id="menu" className={menuOpen ? 'show' : ''}>
          <NavLink href="#features">Features</NavLink>
          <NavLink href="#commands">Commands</NavLink>
          <NavLink href="#installation">Installation</NavLink>
          <NavLink href="#info">Info</NavLink>
        </ul>
        <button id="darkModeToggle" onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '☀️' : '🌙'}
        </button>
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
    </header>
  )
}

export default Header