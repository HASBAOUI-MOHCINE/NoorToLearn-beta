import React, { useState } from 'react'
import { FiHome, FiBookOpen, FiTrendingUp, FiUser, FiMenu, FiX } from 'react-icons/fi'
import ThemeToggle from './ThemeToggle'
import LanguageSwitcher from './LanguageSwitcher'
import logo from '../logo/logo.jpeg'

export default function Navbar({ section, setSection, t, isDark, setIsDark, lang, setLang }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { id: 'overview', label: t('Overview'), icon: FiHome },
    { id: 'courses', label: t('Courses'), icon: FiBookOpen },
    { id: 'progress', label: t('Progress'), icon: FiTrendingUp },
    { id: 'profile', label: t('Profile'), icon: FiUser }
  ]

  const handleNavClick = (id) => {
    setSection(id)
    setMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 border-b shadow-sm backdrop-blur-sm ${isDark ? 'bg-[#1a1714]/95 border-noor-700' : 'bg-white/95 border-stone-200'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button 
            onClick={() => setSection('overview')}
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <img 
              src={logo} 
              alt="NoortoLearn Logo" 
              className="w-10 h-10 rounded-lg object-cover shadow-md"
            />
            <h1 className={`text-xl font-bold ${isDark ? 'text-noor-500' : 'text-stone-900'}`}>
              NoortoLearn
            </h1>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-2">
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => setSection(item.id)}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all flex items-center gap-2 ${
                    section === item.id
                      ? 'bg-gradient-to-r from-noor-500 to-noor-600 text-white shadow-md'
                      : isDark
                        ? 'text-noor-500 hover:bg-noor-800 hover:text-noor-400'
                        : 'text-stone-600 hover:bg-stone-100 hover:text-stone-900'
                  }`}
                >
                  <Icon className="text-lg" />
                  {item.label}
                </button>
              )
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-2">
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
              <LanguageSwitcher lang={lang} setLang={setLang} isDark={isDark} />
            </div>
            
            {/* Hamburger Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-lg transition-all ${
                isDark ? 'hover:bg-noor-800 text-noor-500' : 'hover:bg-stone-100 text-stone-600'
              }`}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div 
          className={`lg:hidden absolute top-16 left-0 right-0 shadow-lg border-t animate-slideDown ${
            isDark ? 'bg-noor-800 border-noor-700' : 'bg-white border-stone-200'
          }`}
          style={{
            animation: 'slideDown 0.3s ease-out'
          }}
        >
          <div className="p-4 space-y-2">
            {/* Mobile Settings */}
            <div className={`sm:hidden flex items-center justify-center gap-3 pb-3 mb-3 border-b ${
              isDark ? 'border-noor-700' : 'border-stone-200'
            }`}>
              <ThemeToggle isDark={isDark} setIsDark={setIsDark} />
              <LanguageSwitcher lang={lang} setLang={setLang} isDark={isDark} />
            </div>

            {/* Navigation Items */}
            {navItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg font-semibold transition-all ${
                    section === item.id
                      ? 'bg-gradient-to-r from-noor-500 to-noor-600 text-white shadow-lg'
                      : isDark
                        ? 'text-noor-500 hover:bg-noor-700'
                        : 'text-stone-600 hover:bg-stone-100'
                  }`}
                >
                  <Icon className="text-xl" />
                  <span>{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}
