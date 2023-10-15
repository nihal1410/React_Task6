import React from 'react'
import Navbar from '../component/Navbar'
import Landing from '../component/Landing'
import Footer from '../component/Footer'
import Card from '../component/Card'
import About2 from '../component/About2'

function Home() {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <Card/>
        <About2/>
        <Footer/>
    </div>
  )
}

export default Home