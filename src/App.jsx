import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import Experience from "./pages/Experience"
import Services from "./pages/Services"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Aos from "aos"
import { useEffect, useState } from "react"
import Loading from "./components/Loading"
function App() {
  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: false,
    })
  }, [])

  const [loading, isloading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      isloading(false)
    }, 2000) 
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return <Loading />
  }

  return (

    <main>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/experience" element={<Experience />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>

      <Footer />

    </main>

  )
}

export default App
