import "./styles.css";

export function CardCarrinho({teste}) {
    let valorTotal = teste.valor * teste.quantidade;
    

return (
    <>
      <tr>
        <td><img src={teste.imagem} alt={teste.nome} /></td>
        <td>{teste.nome}</td>
        <td>{teste.valor}</td>
        <td>{teste.quantidade}</td>
        <td>{valorTotal}</td>
      </tr>
    </>
  );
}
