import { useState } from 'react'
import './App.css'
import Nav from './Navbar.jsx'
import DotGrid from './grid_back.jsx';
import Index from './glowingorb.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <DotGrid/>
  <Nav/>
  <Index/>
  </>
  )
}

export default App
