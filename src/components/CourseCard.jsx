import React from 'react'
import { FiClock } from 'react-icons/fi'

export default function CourseCard({ title, desc, icon: Icon, progress = 0, isDark, t }) {
  return (
    <div className={`rounded-xl p-6 transition-all hover:scale-105 cursor-pointer ${
      isDark 
        ? 'bg-noor-800 border border-noor-700 hover:border-noor-500' 
        : 'bg-white border border-stone-200 hover:border-noor-500 hover:shadow-lg'
    }`}>
      {/* Icon */}
      <div className="w-16 h-16 bg-gradient-to-br from-noor-500 to-noor-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
        <Icon className="text-3xl text-white" />
      </div>

      {/* Content */}
      <h3 className={`text-xl font-bold mb-2 ${
        isDark ? 'text-white' : 'text-stone-900'
      }`}>
        {title}
      </h3>
      <p className={`text-sm mb-6 ${
        isDark ? 'text-noor-600' : 'text-stone-600'
      }`}>
        {desc}
      </p>

      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center text-xs">
          <span className={isDark ? 'text-noor-600' : 'text-stone-500'}>Progress</span>
          <span className="text-noor-500 font-bold">{progress}%</span>
        </div>
        <div className={`h-2 rounded-full overflow-hidden ${
          isDark ? 'bg-noor-900' : 'bg-stone-200'
        }`}>
          <div 
            className="h-full bg-gradient-to-r from-noor-500 to-noor-600 rounded-full transition-all"
            style={{ width: `${progress || 2}%` }}
          />
        </div>
        {progress === 0 && (
          <p className={`text-xs ${isDark ? 'text-noor-600' : 'text-stone-500'}`}>
            Not started
          </p>
        )}
      </div>

      {/* Coming Soon button */}
      <button 
        disabled
        className="mt-4 w-full py-2 bg-noor-700/50 text-noor-500 font-semibold rounded-lg transition-all flex items-center justify-center gap-2 cursor-not-allowed opacity-75"
      >
        <FiClock className="text-lg" />
        {t ? t('Coming Soon') : 'Coming Soon'}
      </button>
    </div>
  )
}
