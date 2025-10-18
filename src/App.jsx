import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import SectionProps from './components/SectionProps'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main>
        <Header />
        <SectionProps />
    </main>
  )
}

export default App
