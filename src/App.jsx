import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className="h-screen flex flex-col gap-20">
        <Navbar />
        <Hero />
      </header>
    </>
  )
}

export default App
