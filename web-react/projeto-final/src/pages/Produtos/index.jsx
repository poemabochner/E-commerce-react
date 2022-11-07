import { CardProduto } from "../../components/CardProduto";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import { useState, useEffect } from "react";

export function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState([]);

  useEffect(() => {
    const tes = async () => {
      const response1 = await api.get("/produtos");
      const response2 = await api.get("/categoria");
      setProdutos(response1.data);
      setCategoria(response2.data);
    };
    tes();
  }, []);

  return (
    <div className="fundo">
      <header>
        <Header />
      </header>
      <div className="Colunas">
        <asside className="col">
          <div className="texto">
            <h1>Destaques em Livros</h1>
            <div className="linksColuna">
              <Link to={"/links"} className="linkC">
                Mais vendidos
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Populares
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Recomendados
              </Link>
            </div>
          </div>
          <div className="texto">
            <h1>Destaques em Livros</h1>
            <div className="linksColuna">
              <Link to={"/links"} className="linkC">
                Mais vendidos
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Populares
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Recomendados
              </Link>
            </div>
          </div>
          <div className="texto">
            <h1>Destaques em Livros</h1>
            <div className="linksColuna">
              <Link to={"/links"} className="linkC">
                Mais vendidos
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Populares
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Recomendados
              </Link>
            </div>
          </div>
          <div className="texto">
            <h1>Destaques em Livros</h1>
            <div className="linksColuna">
              <Link to={"/links"} className="linkC">
                Mais vendidos
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Populares
              </Link>
              <Link to={"/links"} className="linkC" href="links">
                Recomendados
              </Link>
            </div>
          </div>
        </asside>
        <div className="col2">
          <div className="boxDescricao">
            <h4>Produtos em Destaque</h4>
          </div>
          <div className="CardList">
            {produtos.map((produto) => {
              return <CardProduto key={produto.id} produto={produto} />
            })}
            </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
