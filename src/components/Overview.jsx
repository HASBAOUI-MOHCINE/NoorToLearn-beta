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
    <div className="max-w-4xl mx-auto">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-noor-500 to-noor-600 rounded-2xl shadow-lg">
            <FiTarget className="text-4xl text-white" />
          </div>
        </div>
        <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('Welcome to NoortoLearn')}
        </h1>
        <p className={`text-xl mb-8 ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('Your gateway to mastering digital marketing and e-commerce')}
        </p>
      </div>

      {/* About Section */}
      <div className={`p-8 rounded-xl mb-8 ${
        isDark ? 'bg-noor-800 border border-noor-700' : 'bg-stone-50 border border-stone-200'
      }`}>
        <h2 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('What is NoortoLearn?')}
        </h2>
        <p className={`text-lg leading-relaxed ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('NoortoLearn is an online learning platform designed to help you master the essentials of e-commerce and digital advertising. Whether you\'re starting your first online store or looking to scale your business with Google and Meta Ads, we provide structured courses to guide you every step of the way.')}
        </p>
      </div>

      {/* Features Grid */}
      <div className="mb-8">
        <h3 className={`text-xl font-bold mb-6 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('What You\'ll Learn')}
        </h3>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div 
                key={index}
                className={`p-6 rounded-xl transition-all hover:shadow-lg ${
                  isDark ? 'bg-noor-800 border border-noor-700 hover:border-noor-600' : 'bg-white border border-stone-200 hover:border-stone-300'
                }`}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${
                  isDark ? 'bg-gradient-to-br from-noor-600 to-noor-700' : 'bg-gradient-to-br from-noor-500 to-noor-600'
                }`}>
                  <Icon className="text-2xl text-white" />
                </div>
                <h4 className={`font-bold mb-2 text-lg ${isDark ? 'text-noor-500' : 'text-stone-900'}`}>
                  {feature.title}
                </h4>
                <p className={`text-sm leading-relaxed ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
                  {feature.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* CTA Section */}
      <div className={`p-8 rounded-xl text-center ${
        isDark ? 'bg-noor-800 border border-noor-700' : 'bg-stone-50 border border-stone-200'
      }`}>
        <h3 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('Ready to Start Learning?')}
        </h3>
        <p className={`mb-6 ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('Explore our courses and begin your journey to becoming a digital marketing expert.')}
        </p>
        <button className="bg-gradient-to-r from-noor-500 to-noor-600 hover:from-noor-600 hover:to-noor-700 text-white font-bold py-3 px-8 rounded-lg transition-all shadow-md hover:shadow-lg">
          {t('View Courses →')}
        </button>
      </div>
    </div>
  )
}
