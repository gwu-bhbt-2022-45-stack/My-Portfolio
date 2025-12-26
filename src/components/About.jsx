import { useScrollAnimation } from '../hooks/useScrollAnimation'

const About = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [subtitleRef, subtitleVisible] = useScrollAnimation()
  const [leftColRef, leftColVisible] = useScrollAnimation()
  const [rightColRef, rightColVisible] = useScrollAnimation()

  return (
    <div className="section-container bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 
          ref={titleRef}
          className={`section-title scroll-fade-in ${titleVisible ? 'visible' : ''}`}
        >
          About Me
        </h2>
        <p 
          ref={subtitleRef}
          className={`section-subtitle scroll-fade-in ${subtitleVisible ? 'visible' : ''}`}
        >
          Get to know more about my background, passion, and journey in biomedical technology
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div 
            ref={leftColRef}
            className={`space-y-6 scroll-slide-left ${leftColVisible ? 'visible' : ''}`}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              I’m Ashani Kaushalya, a Biomedical Technology enthusiast at Gampaha Wickramarachchi University of Indigenous Medicine, driven by a passion for innovation in healthcare.
              </p>
            </div>

            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                My Mission
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              My mission is to innovate at the edge of medical science—creating healthcare solutions that are technologically advanced, personalized, and naturally grounded for the future of wellness.
              </p>
            </div>
          </div>

          <div 
            ref={rightColRef}
            className={`space-y-6 scroll-slide-right ${rightColVisible ? 'visible' : ''}`}
          >
            <div className="card">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                What I Do
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Study medical diagnostic systems</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Explore therapeutic technologies</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Analyze biomedical data</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Focus on personalized healthcare</span>
                </li>
              </ul>
            </div>

            <div className="card bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Interests
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Biomedical Technology', 'Medical Diagnostics', 'Therapeutic Systems', 'Traditional Medicine', 'Biomedical Research'].map((interest) => (
                  <span
                    key={interest}
                    className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About

