import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import BeersJu from './pages/BeersJu'
import ContactJu from './pages/ContactJu'
import HomeTest from './pages/HomeTest'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeTest />} />
          <Route path="/beersJu" element={<BeersJu />} />
          <Route path="/contactJu" element={<ContactJu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
