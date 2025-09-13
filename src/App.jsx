import { useState } from 'react'
import './App.css'
import Chat from './chat.jsx';
import Ask from './question.jsx';
import Nav from './Navbar.jsx'
import History from './history.jsx';
import DotGrid from './grid_back.jsx';
import Index from './glowingorb.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  <DotGrid/>
  <Nav/>
  <History/>
  <Chat/>
  <Ask/>
  </>
  )
}

export default App
