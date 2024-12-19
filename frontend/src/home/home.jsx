import React from 'react'
import Navbar from '../components/navbar'
import Banner from '../components/banner'
import Freebook from '../components/freebooks'
import Footer from '../components/footer'

export default function home() {
  return (
    <>
     <Navbar />
      <Banner />
      <Freebook />
      <Footer/>
    </>
  )
}
