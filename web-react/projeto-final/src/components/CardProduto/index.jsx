import './styles.css'
import { Link } from 'react-router-dom'

export function CardProduto({produto}) {

  return(
    <div className="Master">
        <div className='imgProduto'> <img src={produto.imagem} alt={produto.nome}/></div>
        <div className = 'nomeProduto'>{produto.nome}</div>
    </div>

  )
}
