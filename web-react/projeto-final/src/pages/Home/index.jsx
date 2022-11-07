import { CardProduto } from "../../components/CardProduto";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import Carrossel from "../../components/Carrossel";
import "./styles.css";

export function Home() {
  const banco = [
    {
      id: 1,
      name: "Poke-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/7/79/Dream_Poké_Ball_Sprite.png",
    },
    {
      id: 2,
      name: "Quick-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/9/90/Dream_Quick_Ball_Sprite.png",
    },
    {
      id: 3,
      name: "Great-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/b/bf/Dream_Great_Ball_Sprite.png",
    },
    {
      id: 4,
      name: "Ultra-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/a/a8/Dream_Ultra_Ball_Sprite.png",
    },
    {
      id: 5,
      name:"Heavy-Bola",
      image:
      "https://archives.bulbagarden.net/media/upload/b/bb/Dream_Heavy_Ball_Sprite.png",
    },
    {
      id: 6,
      name: "fast-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/4/44/Dream_Fast_Ball_Sprite.png",
    },
    {
      id: 7,
      name: "Repeat-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/d/df/Dream_Repeat_Ball_Sprite.png",
    },
    {
      id: 8,
      name: "Love-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/9/94/Dream_Love_Ball_Sprite.png",
    },
    {
      id: 9,
      name: "Nest-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/8/8c/Dream_Nest_Ball_Sprite.png",
    },
    {
      id: 10,
      name: "Master-Bola",
      image:
        "https://archives.bulbagarden.net/media/upload/9/95/Dream_Master_Ball_Sprite.png",
    },
  ];
  let rd = [];

  const Random = () => {
    let i =0; 
    rd = [];
    while(i < 5){
      let temp = (banco[Math.floor(Math.random()*banco.length)]);
      if(rd.includes(temp) == false){
      rd.push(temp);
      i++;
      }
     }
    }

  return (
    <div className="fundo">
      <header>
        <Header />
      </header>
      <div>
        <Carrossel />
      </div>
      <div className="boxDescricao">
       Produtos em Destaque
      </div>
      <div className="CardList">
        {Random()};
      {rd.map((produto) => {
          return <CardProduto key={produto.id} produto={produto} />
          ;
        })}
      </div>
      <div className="boxDescricao">
        Ofertas
      </div>
      <div className="CardList">
      {Random()};
      {rd.map((produto) => {
          return <CardProduto key={produto.id} produto={produto} />
          ;
        })}
      </div>
      <div className="boxDescricao">
        Mais pesquisados
      </div>
      <div className="CardList">
      {Random()};
      {rd.map((produto) => {
          return <CardProduto key={produto.id} produto={produto} />
          ;
        })}
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  )
      }
