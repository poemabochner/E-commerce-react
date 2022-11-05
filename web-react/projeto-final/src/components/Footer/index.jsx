import './style.css'

export const Footer = () =>{
    return(
        <footer className='rodape'>
            <div id='titulo'>
            <h1>Pallett Gym</h1>
            </div>
            <div className='links'>
                <a className='link' href='#home'>Home</a>
                <a className='link' href='#home'>Home</a>
                <a className='link' href='#home'>Home</a>
                <a className='link' href='#home'>Home</a>
                <a className='link' href='#home'>Home</a>
            </div>
            <div id='icons'>
                <a href='https://github.com/BilPinheiro/E-commerce-react'>
                <img className='icones' src="/src/assets/whats.svg" alt="WhatsApp logo" />
                </a>
                <a href='https://github.com/BilPinheiro/E-commerce-react'>
                <img className='icones' src="/src/assets/github.svg" alt="Github logo"></img>
                </a>
                <a href='https://github.com/BilPinheiro/E-commerce-react'>
                <img className='icones' src="/src/assets/linkedin.svg" alt="linkedin logo" />
                </a>
            </div>
            <div id='CopyRight'>
                <p>Copyright @2022 - Grupo 2 All rights reserved | Serratec Residencia em TIC Software</p>
            </div>
        </footer>
    )
}

