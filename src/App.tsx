import { useState } from 'react'
import Cursor from './components/Cursor'
import Loader from './components/Loader'
import Nav from './components/Nav'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  const [loaded, setLoaded] = useState(false)

  return (
    <>
      <Cursor />
      <Loader onDone={() => setLoaded(true)} />

      <div
        className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}
      >
        <Nav />
        <main>
          <Hero />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
