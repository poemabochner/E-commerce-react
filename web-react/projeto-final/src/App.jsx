import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Produtos } from './pages/Produtos'
import { Erro404 } from './pages/Erro404'
import Login from './pages/Login'

function App() {

  return(
    <Routes>
      <Route path="/*" element={<Erro404/>} />
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  ) 
}

export default App
