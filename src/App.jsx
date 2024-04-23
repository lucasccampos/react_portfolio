import styles from './App.module.css'
import { Hero } from './components/hero/Hero'
import { Navbar } from './components/navbar/Navbar'
import { About } from './components/about/About'
import { Experience } from './components/experience/Experience'
import { Projects } from './components/projects/Projects'
import { Contact } from './components/contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />

    </div>
  )
}

export default App
