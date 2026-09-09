import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import CreativeWork from './components/CreativeWork.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <CreativeWork />
        <Skills />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
