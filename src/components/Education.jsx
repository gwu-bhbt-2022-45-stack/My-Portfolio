import { useScrollAnimation } from '../hooks/useScrollAnimation'

const Education = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [subtitleRef, subtitleVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()
  const [infoRef, infoVisible] = useScrollAnimation()

  const education = [
    {
      degree: "Bhsc ( hons ) in Biomedical Technology ",
      institution: "Gampaha Wickramarachchi University",
      period: "2024 - 2028",
      description: "Specialized in biomedical instrumentation, medical device design, and healthcare technology. Focused on understanding the intersection of biology, medicine, and technology to solve healthcare challenges.",
      achievements: [
        "2nd Runner-Up at DHack 2025: Recognized for innovation in biomedical technology at the national level.",
        "Relevant Coursework: Bioinstrumentation, Medical Imaging, Bioinformatics, and Biomechanics.",
        "Capstone Project: Developed an EMG-controlled Arduino system for real-time physiological signal processing and prosthetic control.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14v7M5 10.5h14" />
        </svg>
      ),
    },
    {
      degree: "Diploma in English",
      institution: "Sri Lanka English Language Graduates' Association",
      period: "2023",
      description: "Developed advanced proficiency in oral communication, focusing on clarity, fluency, and professional etiquette. This qualification enhances my ability to present complex biomedical concepts to diverse audiences and collaborate effectively in global professional environments.",
      achievements: [
        "Professional Presentation Skills: Mastered techniques for delivering high-impact academic and business presentations with confidence.",
        "Interview Readiness: Completed specialized training in professional self-presentation and handling complex interview scenarios.",
      ],
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ]

  return (
    <div className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 
        ref={titleRef}
        className={`section-title scroll-fade-in ${titleVisible ? 'visible' : ''}`}
      >
        Education
      </h2>
      <p 
        ref={subtitleRef}
        className={`section-subtitle scroll-fade-in ${subtitleVisible ? 'visible' : ''}`}
      >
        My academic journey in biomedical technology and related fields
      </p>

      <div className="max-w-6xl mx-auto mt-12">
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-8 scroll-fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {education.map((edu, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* card(gradient)*/}
              <div className="relative h-full bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-700 overflow-hidden">
                {/* gradient background overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-primary-600/20 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Icon */}
                <div className="relative mb-6">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 text-white shadow-lg">
                    {edu.icon}
                  </div>
                </div>

                {/* Period Badge */}
                <div className="relative mb-4">
                  <span className="inline-block px-4 py-1.5 text-xs font-semibold text-primary-700 dark:text-primary-300 bg-primary-100 dark:bg-primary-900/40 rounded-full">
                    {edu.period}
                  </span>
                </div>

                {/* Degree Title */}
                <h3 className="relative text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {edu.degree}
                </h3>

                {/* Institution */}
                <div className="relative mb-4 flex items-center">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                  <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
                    {edu.institution}
                  </p>
                </div>

                {/* Description */}
                <p className="relative text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                  {edu.description}
                </p>

                {/* Achievements */}
                {edu.achievements && (
                  <div className="relative">
                    <h4 className="text-sm font-bold text-gray-900 dark:text-white mb-3 flex items-center">
                      <svg className="w-4 h-4 text-primary-600 dark:text-primary-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Key Achievements
                    </h4>
                    <ul className="space-y-2.5">
                      {edu.achievements.map((achievement, idx) => (
                        <li
                          key={idx}
                          className="flex items-start text-sm text-gray-700 dark:text-gray-300"
                        >
                          <svg
                            className="w-5 h-5 text-primary-600 dark:text-primary-400 mr-2.5 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Decorative corner element */}
                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-2 border-b-2 border-primary-200 dark:border-primary-800 rounded-tl-full opacity-30"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info Section */}
        <div 
          ref={infoRef}
          className={`mt-12 bg-gradient-to-r from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20 rounded-2xl p-8 border border-primary-200 dark:border-primary-800 scroll-scale ${infoVisible ? 'visible' : ''}`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 rounded-lg bg-primary-600 dark:bg-primary-500 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="ml-4">
              <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                Continuous Learning
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Committed to staying updated with the latest advancements in biomedical technology through ongoing education, research, and professional development.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education
