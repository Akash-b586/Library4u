import { useState } from 'react'
import Navbar from './components/navbar'
import Banner from './components/banner'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Banner />
      <Footer/>
    </>
    // <h1>
    //   Hello world!
    // </h1>
  )
}

export default App
