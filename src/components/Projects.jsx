import { useScrollAnimation } from '../hooks/useScrollAnimation'
import aidmaidImage from '../assets/aidmaid.jpg'
import emgImage from '../assets/emg.jpg'
import dentalImage from '../assets/dental.jpg'
const Projects = () => {
  const [titleRef, titleVisible] = useScrollAnimation()
  const [subtitleRef, subtitleVisible] = useScrollAnimation()
  const [gridRef, gridVisible] = useScrollAnimation()

  const projects = [
    {
      title: 'Aid Mate App',
      description: 'Developed a responsive mobile app delivering instant, step-by-step first aid guidance through a clean, emergency-focused UI to support critical care before professional help arrives',
      technologies: ['Mobile Development', 'UI/UX Design', 'Healthcare', 'First Aid'],
      image: aidmaidImage,
      category: 'Mobile App',
      link: '#',
    },
    {
      title: '3D Dental Implantation',
      description: 'Built a high-precision dental restoration solution using 3D modeling to enable accurate, patient-specific implant planning and improved surgical outcomes.',
      technologies: ['3D Modeling', 'Dental Technology', 'Medical Imaging', 'CAD'],
      image: dentalImage,
      category: 'Medical Device',
      link: '#',
    },
    {
      title: 'EMG Sensor Circuit',
      description: 'Designed an Arduino-based system with EMG sensors to detect muscle activity, showcasing skills in signal processing, human–machine interaction, and wearable health technology.',
      technologies: ['Arduino', 'EMG Sensors', 'Signal Processing', 'Hardware Design', 'Wearable Tech'],
      image: emgImage,
      category: 'Hardware',
      link: '#',
    },
  ]

  return (
    <div className="section-container bg-gray-50 dark:bg-gray-800">
      <h2 
        ref={titleRef}
        className={`section-title scroll-fade-in ${titleVisible ? 'visible' : ''}`}
      >
        Projects
      </h2>
      <p 
        ref={subtitleRef}
        className={`section-subtitle scroll-fade-in ${subtitleVisible ? 'visible' : ''}`}
      >
        A showcase of my work in biomedical technology, healthcare innovation, and hardware development
      </p>

      <div className="max-w-7xl mx-auto mt-12">
        <div 
          ref={gridRef}
          className={`grid md:grid-cols-2 lg:grid-cols-3 gap-8 scroll-fade-in ${gridVisible ? 'visible' : ''}`}
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className="card group overflow-hidden p-0 hover:scale-105 transition-transform duration-300"
            >
              <div className="relative h-48 overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600'%3E%3Crect fill='%23e0e0e0' width='800' height='600'/%3E%3Ctext fill='%23999' font-family='sans-serif' font-size='24' x='50%25' y='50%25' text-anchor='middle' dy='.3em'%3E${encodeURIComponent(project.title)}%3C/text%3E%3C/svg%3E`
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-primary-100 to-primary-200 dark:from-primary-900 dark:to-primary-800 flex items-center justify-center">
                    <div className="text-center p-4">
                      <svg className="w-16 h-16 mx-auto text-primary-600 dark:text-primary-400 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p className="text-sm text-primary-700 dark:text-primary-300 font-medium">{project.title}</p>
                    </div>
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold bg-white dark:bg-gray-800 text-primary-600 dark:text-primary-400 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects

