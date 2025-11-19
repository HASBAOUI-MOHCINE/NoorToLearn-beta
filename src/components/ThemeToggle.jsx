import React from 'react'
import { FiSun, FiMoon } from 'react-icons/fi'

export default function ThemeToggle({ isDark, setIsDark }) {
  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className={`p-2.5 rounded-lg transition-all ${
        isDark 
          ? 'bg-noor-800 hover:bg-noor-700 text-noor-500 hover:text-noor-400' 
          : 'bg-stone-100 hover:bg-stone-200 text-stone-600 hover:text-stone-900'
      }`}
      aria-label="Toggle theme"
      title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
    >
      {isDark ? (
        <FiSun className="w-5 h-5" />
      ) : (
        <FiMoon className="w-5 h-5" />
      )}
    </button>
  )
}
