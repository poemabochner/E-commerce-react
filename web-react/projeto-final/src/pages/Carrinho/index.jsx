import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import "./styles.css";
import api from "../../services/api";
import { CardCarrinho } from "../../components/CardCarrinho";
import { useEffect, useState } from "react";

export function Carrinho() {
  const [produtosCarrinho, setProdutosCarrinho] = useState([]);
  const [produtos, setProdutos] = useState([])

 const [cupon, setCupon] = useState();
 const total = produtosCarrinho.reduce((total, produtos) => {
  if(cupon == "joaoMeDa10"){
    return total + (((produtos.valor * produtos.quantidade)/10)*9);
  }else{
    return total + (produtos.valor * produtos.quantidade);
  }
}, 0);
  
  useEffect(() => {
      const carregaCarrinho = async () => {
          const temp = await api.get("/carrinho");
          const produto = await api.get("/produtos")
          setProdutosCarrinho(temp.data);
          setProdutos(produto.data);
        };
        carregaCarrinho();
    },[])

    const fecharCompra = async() => {

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
        setProdutosCarrinho([]);
}

    return (
        <>
      <header>
        <Header/>
      </header>

      <body className="carrinhoBody">
            <div className="BoxCardCarrinho">
              <th >Imagem</th>
              <th>Nome</th>
              <th>Valor</th>
              <th>Quantidade</th>
              <th>Valor Total</th>
            </div>
        <thead className="tabelaCarrinho" >
          <div >
            {produtosCarrinho.map((produto) => {
              return <CardCarrinho key={produto.id} teste={produto} />;
            })}
          </div>
        </thead>
        <div className="valorTotalDiv">
        <p className="valorTotal">Total: {total}₽</p>
        </div>
        <button className="fecharCompra" onClick={fecharCompra}>Finalizar compra </button>
        <input className="CUPOM" type="text" placeholder="Insira o cupom" 
        onChange={(e) => setCupon(e.target.value)}/>
      </body>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

