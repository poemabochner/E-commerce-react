import './styles.css'

export function CardProduto({produto}) {
  return(
    <div className="Master">
        <div className='imgProduto'> <img src={produto.image} alt={produto.name} /></div>
        <div className = 'nomeProduto'>{produto.name}</div>
    </div>
  )
}
