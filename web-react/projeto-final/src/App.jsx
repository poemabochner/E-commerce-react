import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Produtos } from './pages/Produtos'

function App() {

  return(
    <Routes>
      <Route path="/*" element={<h1>Erro 404</h1>} />
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produtos" element={<Produtos />} />
    </Routes>
  ) 
}

export default App
