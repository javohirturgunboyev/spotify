import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Like from './pages/Like'
import Playlist from './pages/Playlist'
import MainLayout from './layouts/MainLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout><Home></Home></MainLayout>}></Route>
        <Route path='/like' element={<MainLayout><Like></Like></MainLayout>}></Route>
        <Route path='/playlist/:id' element={<MainLayout><Playlist></Playlist></MainLayout>}></Route>
      </Routes>
    </div>
  )
}

export default App
