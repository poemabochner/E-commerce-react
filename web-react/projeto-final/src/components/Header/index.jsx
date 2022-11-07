import { Link } from 'react-router-dom';
import './styles.css';


export function Header() {
    return (
        <>
            <nav id='header'>
                <div className='logo'>
                    <Link to={'/'}><img className='img-logo' src="../favicon.png" alt="Logo-Loja" /></Link>
                    <div>
                        <Link to={'/'} className='nome-loja'>Pallet PokeMart</Link>
                    </div>
                </div>

                {/* <div className='search'>
                    <h1>search</h1>
                </div> */}

                <div className='header-direita'>
                    <div className='box-direita'>
                        <Link to={'/carrinho'}>
                            <img className='img-carrinho' src="https://cdn.icon-icons.com/icons2/851/PNG/512/Bag_icon-icons.com_67588.png" alt="Carrinho" />
                        </Link>
                        <Link to={'/carrinho'} className='carrinho'>Carrinho</Link>
                        <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number">
                            <img className='img-pokedex' src="https://cdn-icons-png.flaticon.com/512/188/188940.png" alt="Pokedex" />
                        </a>
                        <a href="https://bulbapedia.bulbagarden.net/wiki/List_of_Pokémon_by_National_Pokédex_number" className='pokedex'>Pokedex</a>
                    </div>
                </div>
            </nav >
            <nav id='sub-header'>
                <div className='categoria-header'>
                    <Link to={'/'} className='links'>Pokebolas</Link>
                    <Link to={'/'} className='links'>Item</Link>
                    <Link to={'/'} className='links'>Categoria</Link>
                    <Link to={'/'} className='links'>Categoria</Link>
                    <Link to={'/'} className='links'>Categoria</Link>
                </div>
            </nav>
        </>
    );
}
