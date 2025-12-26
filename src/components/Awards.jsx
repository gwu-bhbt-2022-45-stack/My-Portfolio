import { useScrollAnimation } from '../hooks/useScrollAnimation'
import awardImage from '../assets/award.JPG'

const Awards = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [subtitleRef, subtitleVisible] = useScrollAnimation()
  const [contentRef, contentVisible] = useScrollAnimation()

  const awards = [
    {
      position: '2nd Runner-Up',
      event: 'DHack 2025',
      institution: 'University of Sri Jayewardenepura',
      description: 'Awarded 3rd place in this premier hackathon for developing the AidMate first-aid mobile application, recognized for its strong technical execution, intuitive emergency-focused UI, and significant potential impact in improving rapid medical response and biomedical technology–driven healthcare solutions.',
      image: awardImage,
      year: '2025',
    },
  ]

  return (
    <div className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 
        ref={titleRef}
        className={`section-title scroll-fade-in ${titleVisible ? 'visible' : ''}`}
      >
        Awards & Achievements
      </h2>
      <p 
        ref={subtitleRef}
        className={`section-subtitle scroll-fade-in ${subtitleVisible ? 'visible' : ''}`}
      >
        Recognition for excellence in innovation and technical achievement
      </p>

      <div className="max-w-5xl mx-auto mt-12">
        <div 
          ref={contentRef}
          className={`scroll-fade-in ${contentVisible ? 'visible' : ''}`}
        >
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300"
            >
              {/*gradient overlay*/}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary-500 via-primary-600 to-primary-500"></div>
              
              <div className="grid md:grid-cols-2 gap-0">
                {/*img area*/}
                <div className="relative h-64 md:h-auto overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-primary-900/20 dark:to-primary-800/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-400/10 to-transparent"></div>
                  <img
                    src={award.image}
                    alt={`${award.position} - ${award.event}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23e0e0e0' width='800' height='600'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3EAward%3C/text%3E%3C/svg%3E`
                    }}
                  />
                  {/*badge overlay*/}
                  <div className="absolute top-4 right-4">
                    <div className="bg-white dark:bg-gray-800 rounded-full px-4 py-2 shadow-lg">
                      <span className="text-xs font-bold text-primary-600 dark:text-primary-400">
                        {award.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* content */}
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  {/* Position Badge */}
                  <div className="mb-4">
                    <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-bold bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-md">
                      <svg className="w-5 h-5 mr-2 text-yellow-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      {award.position}
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {award.event}
                  </h3>

                  {/* Institution */}
                  <div className="flex items-center mb-6 text-primary-600 dark:text-primary-400">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    <span className="text-lg font-semibold">{award.institution}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                    {award.description}
                  </p>

                  {/* Achievement */}
                  <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                        Hackathon Winner
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                        Mobile App Development
                      </span>
                      <span className="px-3 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full">
                        Healthcare Innovation
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative corner element */}
              <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-primary-200 dark:border-primary-800 rounded-tr-full opacity-20"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Awards

