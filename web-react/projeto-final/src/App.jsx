import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Home } from './pages/Home'
import { Carrinho } from './pages/Carrinho'
import { Produtos } from './pages/Produtos'


function App() {
  const [count, setCount] = useState(0)


  return(
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/carrinho" element={<Carrinho />} />
      <Route path="/produtos" element={<Produtos />} />
      <Route path="/*" element={<h1>Erro 404: Página Não Encontrada</h1>} />
    </Routes>
  ) 
    
  
}

export default App
