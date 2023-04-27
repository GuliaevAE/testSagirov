import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import Button from 'react-bootstrap/Button'

import Navbar from './components/Navbar';
import Caption from './components/Caption';
import Benefits from './components/Benefits';
import Planet from './components/Planet';
function App() {
  const [count, setCount] = useState(0)

  return (
    <section className='mainContainer'>
      <header>
        <Navbar />
      </header>
      <main className='d-flex justify-content-between'>
        <Caption />
        <Planet/>
        <Benefits />
      </main>
    </section>
  )
}

export default App
