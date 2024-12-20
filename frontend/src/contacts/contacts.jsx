import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
import Contact from '../components/contact'

export default function contacts() {
  return (
    <>
      <header className="flex-shrink-0">
        <Navbar />
      </header>

      {/* Body */}
      <main className="flex-grow flex items-center justify-center">
        <Contact />
      </main>

      {/* Footer */}
      <footer className="flex-shrink-0">
        <Footer />
      </footer>
    </>
  )
}
