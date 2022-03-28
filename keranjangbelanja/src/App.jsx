import React from 'react'
import { Routes, Route } from 'react-router-dom'
import KeranjangBelanja from './pages/KeranjangBelanja'


function App() {
  return (
    <Routes>
      <Route path="/" element={<KeranjangBelanja />} />
    </Routes>
  )
}

export default App
