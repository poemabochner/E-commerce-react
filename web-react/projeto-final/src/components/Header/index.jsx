import './styles.css';

export function Header() {
    return (
        <>
            <nav id='header'>
                <div className='logo'>
                    <img className='img-logo' src="https://cdn.icon-icons.com/icons2/851/PNG/512/Shopping_Bag_icon-icons.com_67506.png" alt="Logo-Loja" />
                    <div className='nome-loja'>
                        <h1 className='bordas'>Pallet Gym</h1>
                    </div>
                </div>

                {/* <div className='search'>
                    <h1>search</h1>
                </div> */}

                <div className='header-direita'>
                    <img className='img-carrinho' src="https://cdn.icon-icons.com/icons2/851/PNG/512/Bag_icon-icons.com_67588.png" alt="Carrinho" />
                    <h1 className='bordas'>Produtos</h1>
                </div>
            </nav >
            <nav id='sub-header'>
                <div className='categoria-header'>
                    <button className='bordas'>Categoria</button>
                    <h1 className='bordas'>Categoria</h1>
                    <h1 className='bordas'>Categoria</h1>
                    <h1 className='bordas'>Categoria</h1>
                    <h1 className='bordas'>Categoria</h1>
                </div>
            </nav>
        </>
    );
}
