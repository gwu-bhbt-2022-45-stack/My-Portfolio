import { useEffect, useState } from 'react'
import profileImage from '../assets/profile.jpg'

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-primary-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20 relative">
      <div className="section-container">
        <div
          className={`grid md:grid-cols-2 gap-12 items-center ${
            isVisible ? 'animate-fade-in' : 'opacity-0'
          }`}
        >
          {/* Left Content */}
          <div className="text-center md:text-left space-y-6 animate-slide-up">
            <div className="space-y-4">
              <p className="text-primary-600 dark:text-primary-400 font-semibold text-lg">
                Hello, I'm
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white">
                <span className="bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent">
                  Ashani Kaushalya
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
                Biomedical Technology Professional
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                Passionate about leveraging technology to advance healthcare and improve patient outcomes through innovative biomedical solutions.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="btn-secondary"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center md:justify-end animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Ashani Kaushalya"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    // Fallback to a placeholder if image fails to load
                    e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400'%3E%3Crect fill='%23e0e0e0' width='400' height='400'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='18' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EProfile Image%3C/text%3E%3C/svg%3E`
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <button
            onClick={() => scrollToSection('about')}
            className="text-primary-600 dark:text-primary-400"
            aria-label="Scroll down"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hero

