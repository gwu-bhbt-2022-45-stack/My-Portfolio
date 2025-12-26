const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <footer className="bg-gray-900 dark:bg-black text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Ashani Kaushalya</h3>
            <p className="text-gray-400 mb-4">
              Biomedical Technology Professional dedicated to advancing healthcare through innovation and technology.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['home', 'about', 'education', 'skills', 'projects', 'awards'].map(
                (section) => (
                  <li key={section}>
                    <button
                      onClick={() => scrollToSection(section)}
                      className="text-gray-400 hover:text-primary-400 transition-colors capitalize"
                    >
                      {section === 'home' ? 'Home' : section}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Get In Touch</h3>
            <p className="text-gray-400 mb-4">
              Interested in collaborating or have questions? Feel free to reach out!
            </p>
            <a
              href="mailto:ashanikaushalya0727@gmail.com"
              className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              ashani@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>
            © {currentYear} Ashani Kaushalya. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

