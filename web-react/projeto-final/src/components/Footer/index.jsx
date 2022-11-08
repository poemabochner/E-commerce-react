import './style.css'
import { Link } from 'react-router-dom'

export const Footer = () =>{
    return(
        <footer className='rodape'>
            <div className='titulo'>
                <Link to={'/'}><img className='img-logo' src="../favicon.png" alt="Logo-Loja" /></Link>
                <Link to={'/'} className='nome-loja'>Pallet PokeMart</Link>
            </div>
            <div className='links'>
                <Link to={'/carrinho'} className='link'>Carrinho</Link>
                <Link to={'/produtos'} className='link' href='/produtos'>Produtos</Link>
                <Link to={'/'} className='link'>Home</Link>
                <Link to={'/produtos'} className='link' href='/produtos'>Produtos</Link>
                <Link to={'/carrinho'} className='link'>Carrinho</Link>
            </div>
            <div id='icons'>
                <a href='https://github.com/BilPinheiro/E-commerce-react'>
                <img className='icones' src="/src/assets/githubWhite.svg" alt="WhatsApp logo" />
                </a>
                <a href='https://github.com/BilPinheiro/E-commerce-react'>
                <img className='icones' src="/src/assets/githubWhite.svg" alt="Github logo"></img>
                </a>
                <a href='https://github.com/BilPinheiro/E-commerce-react'>
                <img className='icones' src="/src/assets/githubWhite.svg" alt="linkedin logo" />
                </a>
            </div>
            <div id='CopyRight'>
                <p>Copyright @2022 - Grupo 2 All rights reserved | Serratec Residencia em TIC Software</p>
            </div>
        </footer>
    )
}
