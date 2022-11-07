import { CardProduto } from "../../components/CardProduto";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Carrossel from "../../components/Carrossel";
import "./styles.css";
import { useState, useEffect } from "react";
import api from "../../services/api";

export function Home() {
  const [produtos, setProdutos] = useState([]);

  let rd = [];

  useEffect(() => {
    const tes = async () => {
      const response = await api.get("/produtos");
      setProdutos(response.data);
    };
    tes();
  }, []);

  const Random = () => {
    let i = 0;
    rd = [];
    if(produtos.length > 0) {
    while (i < 5) {
      let temp = produtos[Math.floor(Math.random() * produtos.length)];
      if (rd.includes(temp) == false) {
        rd.push(temp);
        i++;
      }
    }}
  };

  return (
    <>
      <div className="fundo">
        <header>
          <Header />
        </header>
        <div>
          <Carrossel />
        </div>
        <div className="boxDescricao">Produtos em Destaque</div>
        <div className="CardList">
        {Random()}
          {rd.map((produto) => {
            console.log(produto)
             return <CardProduto key={produto.id} produto={produto} />;
          })}
        </div>
        <div className="boxDescricao">Ofertas</div>
        <div className="CardList">
          {Random()}
          {rd.map((produto) => {
            return <CardProduto key={produto.id} produto={produto} />;
          })}
        </div>
        <div className="boxDescricao">Mais pesquisados</div>
        <div className="CardList">
          {Random()}
          {rd.map((produto) => {
            return <CardProduto key={produto.id} produto={produto} />;
          })}
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
