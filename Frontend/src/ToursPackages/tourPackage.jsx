/* import React from 'react'*/
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Packages from "../components/Packages"

function tourPackage() {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen"><Packages/></div>
    <Footer/>
    </>
  )
}

export default tourPackage
