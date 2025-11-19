import React from 'react'
import { FiGlobe } from 'react-icons/fi'

export default function LanguageSwitcher({ lang, setLang, isDark }) {
  return (
    <div className="relative">
      <FiGlobe className={`absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none ${
        isDark ? 'text-noor-500' : 'text-stone-600'
      }`} />
      <select
        value={lang}
        onChange={(e) => setLang(e.target.value)}
        className={`pl-9 pr-3 py-2 rounded-lg text-sm font-semibold cursor-pointer transition-all appearance-none ${
          isDark
            ? 'bg-noor-800 hover:bg-noor-700 text-noor-500 border border-noor-700'
            : 'bg-stone-100 hover:bg-stone-200 text-stone-600 border border-stone-300'
        }`}
        aria-label="Select language"
      >
        <option value="en">EN</option>
        <option value="fr">FR</option>
        <option value="ar">AR</option>
      </select>
    </div>
  )
}
