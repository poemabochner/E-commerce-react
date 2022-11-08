import "./styles.css";

export function CardCarrinho({teste}) {
    let valorTotal = teste.valor * teste.quantidade;
    

return (
      <div className="produtosCarrinho">
        <th className="cardCarrinho"><img src={teste.imagem} alt={teste.nome} /></th>
        <th className="cardCarrinho">{teste.nome}</th>
        <th className="cardCarrinho">{teste.valor} ₽</th>
        <th className="cardCarrinho">{teste.quantidade}</th>
        <th className="cardCarrinho">{valorTotal} ₽</th>
      </div>
  );
}
