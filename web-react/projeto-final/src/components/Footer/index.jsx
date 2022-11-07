import './style.css'
import { Link } from 'react-router-dom'

export const Footer = () =>{
    return(
        <footer className='rodape'>
            <div id='titulo'>
            <h1>Pallett Gym</h1>
            </div>
            <div className='links'>
                <Link to={'/carrinho'} className='link'>Carrinho</Link>
                <Link to={'/produtos'} className='link' href='/produtos'>Produtos</Link>
                <Link to={'/'} className='link'>Home</Link>
                <Link to={'/produtos'} className='link' href='/produtos'>Produtos</Link>
                <Link to={'/carrinho'} className='link'>Carrinho</Link>
            </div>
            <div id='icons'>
                <Link to={'https://github.com/BilPinheiro/E-commerce-react'}>
                <img className='icones' src="/src/assets/whats.svg" alt="WhatsApp logo" />
                </Link>
                <Link to={'https://github.com/BilPinheiro/E-commerce-react'}>
                <img className='icones' src="/src/assets/github.svg" alt="Github logo"></img>
                </Link>
                <Link to={'https://github.com/BilPinheiro/E-commerce-react'}>
                <img className='icones' src="/src/assets/linkedin.svg" alt="linkedin logo" />
                </Link>
            </div>
            <div id='CopyRight'>
                <p>Copyright @2022 - Grupo 2 All rights reserved | Serratec Residencia em TIC Software</p>
            </div>
        </footer>
    )
}

