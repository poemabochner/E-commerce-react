import { CardProduto } from "../../components/CardProduto";
import "./styles.css";
export function Home() {
  return (
    <div className='fundo'>
      <header>
        <h1>header</h1>
      </header>
      <div>
        <h1>Carrossel</h1>
      </div>
      <div className="boxDescricao">
        <h4>Produtos em Destaque</h4>
      </div>
      <div className="CardList">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
      <div className="boxDescricao">
        <h4>Ofertas</h4>
      </div>
      <div className="CardList">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
      <div className="boxDescricao">
        <h4>Mais pesquisados</h4>
      </div>
      <div className="CardList">
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
        <CardProduto />
      </div>
      <footer>
        <h1>footer</h1>
      </footer>
    </div>
  );
}
