import { CardProduto } from "../../components/CardProduto";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Link } from "react-router-dom";
import "./styles.css";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { ModalCards } from "../../components/Modal";

export function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [categoria, setCategoria] = useState([]);
  const [filtro, setFiltro] = useState();
  const [produtosFiltrados, setProdutosFiltrados] = useState([]);
  let v = 0;

  useEffect(() => {
    const tes = async () => {
      const response1 = await api.get("/produtos");
      const response2 = await api.get("/categoria");
      setProdutos(response1.data);
      setCategoria(response2.data);
      setProdutosFiltrados(response1.data);
    };
    tes();
  }, []);

  useEffect(() => {
    {
      if (filtro > 0) {
        let filtrados = produtos.filter(
          (produto) => produto.CategoriaId == filtro
        );
        console.log(filtrados);
        setProdutosFiltrados(filtrados);
      } else {
        setProdutosFiltrados(produtos);
        console.log(produtosFiltrados);
      }
    }
  }, [filtro]);

  function mudaFiltro() {
    switch(v){
      case 0:
      setFiltro(0)
      break;
      case 1:
      setFiltro(1)
      break;
      case 2:
      setFiltro(2)
      break;
      case 3:
      setFiltro(3)
      break;
      case 4:
       setFiltro(4)
       break;
      case 5:
        setFiltro(5)
        break;
    }
  }
    
 

  
   return (
    <div className="fundo">
      <header>
        <Header />
      </header>
      <div className="Colunas">
        <asside className="col">
          <div className="texto">
            <Link className="filtroColuna" onClick={() => {v =1; mudaFiltro();}}>Poke-Bolas</Link>
            <div className="linksColuna">
            {/* <Link className="linkC">Mais vendidos</Link> */}
            </div>
          </div>
          <div className="texto">
            <Link className="filtroColuna" onClick={() => {v =2; mudaFiltro();}}>Medicinas</Link>
            <div className="linksColuna">
              {/* <Link className="linkC">Mais vendidos</Link> */}
            </div>
          </div>
          <div className="texto">
            <Link className="filtroColuna" onClick={() => {v =3; mudaFiltro();}}>incensos</Link>
            <div className="linksColuna">
              {/* <Link to={"/links"} className="linkC">Mais vendidos</Link> */}
            </div>
          </div>
          <div className="texto">
            <Link className="filtroColuna" onClick={() => {v =4; mudaFiltro();}}>Itens de Batalha</Link>
            <div className="linksColuna">
              {/* <Link to={"/links"} className="linkC">Mais vendidos</Link> */}
            </div>
          </div>
          <div className="texto">
            <Link  className="filtroColuna" onClick={() => {v =5; mudaFiltro();}}>Mints</Link>
            <div className="linksColuna">
              {/* <Link to={"/links"} className="linkC">Mais vendidos</Link> */}
            </div>
          </div>
          <div className="texto">
            <Link className="filtroColuna" onClick={() => {v =0; mudaFiltro();}}>Todos</Link>
           </div>
        </asside>
        <div className="col2">
          <div className="boxDescricao">
            <h4>Produtos</h4>
          </div>
          <div className="CardList">
            {produtosFiltrados.map((produto) => {
              return <ModalCards key={produto.id} produto={produto} />;
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
