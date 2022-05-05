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
          {/* Page Home  */}
          <Route path="/" element={<HomeTest />} />

          {/* Page Nos bières  */}
          <Route path="/beersJu" element={<BeersJu />} />

          {/* Page Contact  */}
          <Route path="/contactJu" element={<ContactJu />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
