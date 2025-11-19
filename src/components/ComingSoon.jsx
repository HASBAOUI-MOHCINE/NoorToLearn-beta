import React from 'react'
import { FiClock } from 'react-icons/fi'

export default function ComingSoon({ t, isDark }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      {/* Icon */}
      <div className="mb-8">
        <div className="w-32 h-32 bg-gradient-to-br from-noor-500 to-noor-600 rounded-full flex items-center justify-center shadow-xl">
          <FiClock className="text-7xl text-white" />
        </div>
      </div>
      
      {/* Title */}
      <h2 className={`text-4xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
        {t('Coming Soon')}
      </h2>
      
      {/* Description */}
      <p className={`text-lg max-w-md ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
        {t('This section is being prepared and will be available soon.')}
      </p>
    </div>
  )
}
