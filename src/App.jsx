import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import Courses from './Pages/Courses.jsx'
import Contact from './Pages/Contact.jsx'
import Login from './Pages/Login.jsx'
import Layout from './layouts/Layout.jsx'
import Loader from './Components/Loader/Loader.jsx'
import ScrollToTop from './Components/js/ScrollToTop.jsx'

function App() {
  return (
    <>
    <ScrollToTop/>
      <Layout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Courses" element={<Courses />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Layout>

      <Loader/>
    </>
  )
}

export default App
