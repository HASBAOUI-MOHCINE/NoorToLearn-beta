import React from 'react'
import { FiShoppingCart, FiTrendingUp, FiTarget } from 'react-icons/fi'
import { SiGoogle, SiFacebook } from 'react-icons/si'

export default function Overview({ t, isDark }) {
  const features = [
    {
      icon: FiShoppingCart,
      title: t('E-commerce Mastery'),
      desc: t('Build and scale successful online stores with proven strategies and best practices.')
    },
    {
      icon: SiGoogle,
      title: t('Google Ads Expertise'),
      desc: t('Create high-converting ad campaigns and maximize your ROI with Google\'s advertising platform.')
    },
    {
      icon: SiFacebook,
      title: t('Meta Ads Proficiency'),
      desc: t('Master Facebook and Instagram advertising to reach your target audience effectively.')
    }
  ]

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="text-center mb-8 sm:mb-10 md:mb-12">
        <div className="mb-4 sm:mb-6">
          <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-gradient-to-br from-noor-500 to-noor-600 rounded-xl sm:rounded-2xl shadow-lg">
            <FiTarget className="text-2xl sm:text-3xl md:text-4xl text-white" />
          </div>
        </div>
        <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 px-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('Welcome to NoortoLearn')}
        </h1>
        <p className={`text-base sm:text-lg md:text-xl mb-6 sm:mb-8 px-2 ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('Your gateway to mastering digital marketing and e-commerce')}
        </p>
      </div>

      {/* About Section */}
      <div className={`p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl mb-6 sm:mb-8 ${
        isDark ? 'bg-noor-800 border border-noor-700' : 'bg-stone-50 border border-stone-200'
      }`}>
        <h2 className={`text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('What is NoortoLearn?')}
        </h2>
        <p className={`text-sm sm:text-base md:text-lg leading-relaxed ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('NoortoLearn is an online learning platform designed to help you master the essentials of e-commerce and digital advertising. Whether you\'re starting your first online store or looking to scale your business with Google and Meta Ads, we provide structured courses to guide you every step of the way.')}
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-6 sm:mb-8">
        <h3 className={`text-lg sm:text-xl font-bold mb-4 sm:mb-6 px-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('What You\'ll Learn')}
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className={`p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl transition-all hover:shadow-lg ${
                  isDark ? 'bg-noor-800 border border-noor-700 hover:border-noor-600' : 'bg-white border border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-lg mb-3 sm:mb-4 ${
                  isDark ? 'bg-gradient-to-br from-noor-600 to-noor-700' : 'bg-gradient-to-br from-noor-500 to-noor-600'
                }`}>
                  <Icon className="text-xl sm:text-2xl text-white" />
                </div>
                <h4 className={`font-bold mb-2 text-base sm:text-lg ${isDark ? 'text-noor-500' : 'text-stone-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-xs sm:text-sm leading-relaxed ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`p-4 sm:p-6 md:p-8 rounded-lg sm:rounded-xl text-center ${
        isDark ? 'bg-noor-800 border border-noor-700' : 'bg-stone-50 border border-stone-200'
      }`}>
        <h3 className={`text-xl sm:text-2xl font-bold mb-3 sm:mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('Ready to Start Learning?')}
        </h3>
        <p className={`mb-4 sm:mb-6 text-sm sm:text-base px-2 ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('Explore our courses and begin your journey to becoming a digital marketing expert.')}
        </p>
        <button className="bg-gradient-to-r from-noor-500 to-noor-600 hover:from-noor-600 hover:to-noor-700 text-white font-bold py-2.5 px-6 sm:py-3 sm:px-8 text-sm sm:text-base rounded-lg transition-all shadow-md hover:shadow-lg">
          {t('View Courses →')}
        </button>
      </div>
    </div>
  )
}
