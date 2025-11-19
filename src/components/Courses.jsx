import React from 'react'
import CourseCard from './CourseCard'
import { FiShoppingCart } from 'react-icons/fi'
import { SiGoogle, SiFacebook } from 'react-icons/si'

export default function Courses({ t, isDark }) {
  const courses = [
    {
      id: 'ecom',
      title: t('E-commerce'),
      desc: t('Learn how to build, launch and scale an online store.'),
      icon: FiShoppingCart,
      progress: 0
    },
    {
      id: 'google',
      title: t('Google Ads'),
      desc: t('Master search & display campaigns to grow traffic.'),
      icon: SiGoogle,
      progress: 0
    },
    {
      id: 'meta',
      title: t('Meta Ads'),
      desc: t('Create effective Facebook & Instagram ad funnels.'),
      icon: SiFacebook,
      progress: 0
    },
  ]

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Header */}
      <div className="mb-6 sm:mb-8 px-2">
        <h2 className={`text-2xl sm:text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-stone-900'}`}>
          {t('Courses')}
        </h2>
        <p className={`text-sm sm:text-base md:text-lg ${isDark ? 'text-noor-600' : 'text-stone-600'}`}>
          {t('Choose a track to begin your learning journey.')}
        </p>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} isDark={isDark} t={t} />
        ))}
      </div>
    </div>
  )
}
