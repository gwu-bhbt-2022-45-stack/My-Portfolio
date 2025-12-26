import { useScrollAnimation } from '../hooks/useScrollAnimation'

const TechSkills = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [subtitleRef, subtitleVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()

  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 85 },
        { name: 'MATLAB', level: 85 },
        { name: 'C++', level: 80 },
        { name: 'JavaScript', level: 80 },
      ],
    },
    {
      category: 'Biomedical Technologies',
      skills: [
        { name: 'Medical Imaging (MRI/CT)', level: 85 },
        { name: 'Biomedical Instrumentation', level: 90 },
        { name: 'Lab Equipment Operation', level: 85 },
        { name: 'Medical Device Design', level: 80 },
        { name: 'Biosensors', level: 75 },
      ],
    },
    {
      category: 'Data Analysis & Bioinformatics',
      skills: [
        { name: 'Data Analysis', level: 85 },
        { name: 'Statistical Analysis', level: 80 },
        { name: 'Bioinformatics Tools', level: 75 },
        { name: 'Machine Learning', level: 70 },
        { name: 'Database Management', level: 75 },
      ],
    },
    {
      category: 'Software & Tools',
      skills: [
        { name: 'AutoCAD', level: 90 },
        { name: 'SolidWorks', level: 80 },
        { name: 'GitHub', level: 80 },
      ],
    },
  ]

  return (
    <div className="section-container bg-white dark:bg-gray-900">
      <h2 
        ref={titleRef}
        className={`section-title scroll-fade-in ${titleVisible ? 'visible' : ''}`}
      >
        Tech Skills
      </h2>
      <p 
        ref={subtitleRef}
        className={`section-subtitle scroll-fade-in ${subtitleVisible ? 'visible' : ''}`}
      >
        Technical expertise and competencies in biomedical technology and related fields
      </p>

      <div className="max-w-6xl mx-auto mt-12">
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 gap-8 scroll-fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="card">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                {category.category}
              </h3>
              <div className="space-y-5">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2.5 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default TechSkills

