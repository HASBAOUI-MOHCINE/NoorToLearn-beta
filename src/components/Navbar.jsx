import React from 'react'

export default function Navbar({ section, setSection, t }) {
  const menuItems = [
    { id: 'overview', label: t('Overview'), icon: '📊' },
    { id: 'courses', label: t('Courses'), icon: '📚' },
    { id: 'progress', label: t('Progress'), icon: '📈' },
    { id: 'profile', label: t('Profile'), icon: '👤' }
  ]

  return (
    <aside className="w-64 bg-noor-900/50 border-r border-white/5 flex flex-col">
      <div className="p-6">
        <div className="w-12 h-12 bg-gradient-to-br from-noor-500 to-noor-600 rounded-lg flex items-center justify-center text-2xl mb-2">
          ✨
        </div>
        <h2 className="text-sm font-semibold text-noor-700">Learning Platform</h2>
      </div>

      <nav className="flex-1 px-3">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setSection(item.id)}
            className={`
              w-full flex items-center gap-3 px-4 py-3 mb-2 rounded-lg
              transition-all duration-200
              ${section === item.id
                ? 'bg-gradient-to-r from-noor-600 to-noor-500 text-noor-900 font-semibold shadow-lg'
                : 'text-noor-700 hover:bg-white/5 hover:text-noor-500'
              }
            `}
          >
            <span className="text-xl">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="p-4 text-xs text-noor-700 border-t border-white/5">
        <p>Version 1.0.0</p>
      </div>
    </aside>
  )
}
