import './App.css'
import About from './Components/About'

import ContactUs from './Components/Contact'

import Hero from './Components/Hero'
import Projects from './Components/Projects'
import Sphere from './Components/sphereText/Sphere'
import SnowEffect from './animation/SnowEffect'

function App() {
  return (
    <>
      <Hero />
      <About />

      {/* 🧊 Snow effect starts from here */}
      <SnowEffect />
      <Sphere />
      <Projects />

  
      <ContactUs />
    </>
  )
}

export default App;
