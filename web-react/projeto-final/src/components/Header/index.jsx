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

                <div className='header-direita'>
                    <div className='box-direita'>
                        <Link to={'/carrinho'}>
                            <img className='img-carrinho' src="https://cdn-icons-png.flaticon.com/512/3361/3361585.png" alt="Carrinho" />
                        </Link>
                        <Link to={'/carrinho'} className='carrinho'>Carrinho</Link>
                        <Link to={'/login'}><img className='img-pokedex' src='https://cdn-icons-png.flaticon.com/512/287/287226.png'></img></Link>
                        <Link to={'/login'} className='pokedex'>Entrar</Link>
                        <Link><img className='img-produtos' src="https://cdn-icons-png.flaticon.com/512/188/188941.png" alt="Produtos" /></Link>
                        <Link to={'/produtos'} className='produtos'>Produtos</Link>
                    </div>
                </div>
            </nav >
            <nav id='sub-header'>
                <div className='categoria-header'>
                    {/* <Link to={'/pokebolas'} className='links'>Pokebolas</Link>
                    <Link to={'/medicina'} className='links'>Medicina</Link>
                    <Link to={'/mints'} className='links'>Mints</Link>
                    <Link to={'/incenso'} className='links'>Incenso</Link>
                    <Link to={'/batalha'} className='links'>Itens de Batalha</Link> */}
                </div>
            </nav>
        </>
    );
}
