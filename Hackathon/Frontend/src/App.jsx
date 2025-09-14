import { useState } from 'react'
import './App.css'
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Chatpage from './chatpage.jsx';
import Home from './Home.jsx';



function App() {
  const [ques, setques] = useState(0)

  return (
  <>
  <Router>
      <Routes>
          <Route path="/" element={<Home setques = {setques} />} />
          <Route path="/chat" element={<Chatpage ans = {ques} setques = {setques} />} />
          {/* <Route path="/events" element={<EditExpense />} />
          <Route path="/delete" element={<DeleteExpense />} />
          <Route path="/search" element={<SearchPage sorting={sort} />} /> */}
        </Routes>
    </Router>
  {/* <DotGrid/>
  <Nav/>
  <History/>
  <Chat ans = {ques}/>
  <Ask setques = {setques}/> */}
  </>
  )
}

export default App
