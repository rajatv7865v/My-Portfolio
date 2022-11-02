import React from 'react'
import NavBar from './portfolio/NavBar'
import Profile from './portfolio/Profile'
import About from './portfolio/About'
import Skills from './portfolio/Skills'
import Contact from './portfolio/Contact'
import Footer from './portfolio/Footer'
import Project from './portfolio/Project'

const Home = () => {
  return (
    <div>
      <NavBar/>
      <Profile/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default Home
