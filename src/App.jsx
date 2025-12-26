import { useState, useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Education from './components/Education'
import TechSkills from './components/TechSkills'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'awards']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Navigation activeSection={activeSection} />
      
      <main>
        <section id="home">
          <Hero />
        </section>
        
        <section id="about">
          <About />
        </section>
        
        <section id="education">
          <Education />
        </section>
        
        <section id="skills">
          <TechSkills />
        </section>
        
        <section id="projects">
          <Projects />
        </section>
        
        <section id="awards">
          <Awards />
        </section>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
