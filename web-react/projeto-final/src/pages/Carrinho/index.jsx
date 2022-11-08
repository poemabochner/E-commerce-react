import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./styles.css";
import api from "../../services/api";
import { CardCarrinho } from "../../components/CardCarrinho";
import { useEffect, useState } from "react";

export function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([])
  const total = produtosCarrinho.reduce((total, produtos ) => {
      return total + produtos.valor * produtos.quantidade;
  }, 0);
  
  useEffect(() => {
      const carregaCarrinho = async () => {
          const temp = await api.get("/carrinho");
          const produto = await api.get("/produtos")
          setProdutosCarrinho(temp.data);
          setProdutos(produto.data);
        };
        carregaCarrinho();
    })

    const fecharCompra = async() => {
        const fechaCompra = async () =>{
               produtosCarrinho.map((carrinhoProduto) => {
                const retiraEstoque = async () =>{
               const prod = produtos.find((id) => id.id == carrinhoProduto.idProduto);
               prod.qtdEstoque = prod.qtdEstoque - carrinhoProduto.quantidade; 
               let caminho = "/produtos/" + prod.id;
               console.log(prod);
               await api.put(caminho, prod);
               await api.delete(`/carrinho/${carrinhoProduto.id}`)
            }
            retiraEstoque();

        })
        }
        fechaCompra();
        if(produtosCarrinho.length = 1){
           await api.delete(`/carrinho/${produtosCarrinho.id}`)
        }
}

    return (
        <div className="fundo">
      <header>
        <Header />
      </header>
      <body className="carrinhoBody">
        <table>
          <thead className="tabelaCarrinho">
            <tr>
              <th>Imagem</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Valor Total</th>
            </tr>
          </thead>
          <tbody>
            {produtosCarrinho.map((produto) => {
              return <CardCarrinho key={produto.id} teste={produto} />;
            })}
          </tbody>
        </table>
        <h1>Valor total do carrinho {total}</h1>
        <button onClick={fecharCompra}>Fechar compra </button>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

