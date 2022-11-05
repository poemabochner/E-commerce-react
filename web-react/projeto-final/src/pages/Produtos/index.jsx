import { CardProduto } from "../../components/CardProduto";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import './styles.css'


export function Produtos() {
    return (
        <div className='fundo'>
            <header>
                <Header />
            </header>
            <div className="Colunas">
                <asside className="col">
                    <div className="texto">
                        <h1>Destaques em Livros</h1>
                        <div className="linksColuna">
                            <a className="linkC" href="links">Mais vendidos</a>
                            <a className="linkC" href="links">Populares</a>
                            <a className="linkC" href="links">Recomendados</a>
                        </div>
                    </div>
                    <div className="texto">
                        <h1>Destaques em Livros</h1>
                        <div className="linksColuna">
                            <a className="linkC" href="links">Mais vendidos</a>
                            <a className="linkC" href="links">Populares</a>
                            <a className="linkC" href="links">Recomendados</a>
                        </div>
                    </div>
                    <div className="texto">
                        <h1>Destaques em Livros</h1>
                        <div className="linksColuna">
                            <a className="linkC" href="links">Mais vendidos</a>
                            <a className="linkC" href="links">Populares</a>
                            <a className="linkC" href="links">Recomendados</a>
                        </div>
                    </div>
                    <div className="texto">
                        <h1>Destaques em Livros</h1>
                        <div className="linksColuna">
                            <a className="linkC" href="links">Mais vendidos</a>
                            <a className="linkC" href="links">Populares</a>
                            <a className="linkC" href="links">Recomendados</a>
                        </div>
                    </div>
                    <div className="texto">
                        <h1>Destaques em Livros</h1>
                        <div className="linksColuna">
                            <a className="linkC" href="links">Mais vendidos</a>
                            <a className="linkC" href="links">Populares</a>
                            <a className="linkC" href="links">Recomendados</a>
                        </div>
                    </div>
                    <div className="texto">
                        <h1>Destaques em Livros</h1>
                        <div className="linksColuna">
                            <a className="linkC" href="links">Mais vendidos</a>
                            <a className="linkC" href="links">Populares</a>
                            <a className="linkC" href="links">Recomendados</a>
                        </div>
                    </div>
                </asside>
                <div className="col2">
                    <div className="boxDescricao">
                        <h4>Produtos em Destaque</h4>
                    </div>
                    <div className="CardList">
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
                    </div>
                    <div className="boxDescricao">
                        <h4>Mais pesquisados</h4>
                    </div>
                    <div className="CardList">
                        <CardProduto />
                        <CardProduto />
                        <CardProduto />
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}