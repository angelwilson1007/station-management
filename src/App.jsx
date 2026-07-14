import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import AddBooking from './components/AddBooking'
import ViewBooking from './components/ViewBooking'
import Navigation from './components/Navigation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddBooking/>
      <ViewBooking/>
      <Navigation/>
    </>
  )
}

export default App
