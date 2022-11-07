import './styles.css'
import { Link } from 'react-router-dom'

export function Erro404(){
    return(
    <>
    <div className='botao'>
        <Link to={'/'}>
        <button className='btnHome'>Voltar Para Home</button>
        </Link>
    </div>
    </>
    
    )
}