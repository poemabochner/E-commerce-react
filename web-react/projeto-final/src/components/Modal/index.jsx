import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react'
import { CardProduto } from '../CardProduto';
import './styles.css'
import api from "../../services/api";


let v;


function MyVerticallyCenteredModal(props) {

  const [qtdPedido, setQtdPedido] = useState()

  async function atualizaCarrinho(pedido){
  const postCarrinho = {
    idProduto: pedido.id,
    nome: pedido.nome,
    valor: pedido.valor,
    imagem: pedido.imagem,
    quantidade: qtdPedido
  }
  await api.post('/carrinho', postCarrinho)
  }



  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header className='tituloModal' closeButton>
        <h1 className='nomeProduto'>
          {v.nome}
        </h1>
      </Modal.Header>
      <container className="containe">
        <div className='ColunaImagem'>
          <img  className='imagemModalS' src={v.imagem} alt="" />
        </div>
        <div className='ColunaDescricoes'>
            <h2>Descrição</h2>
            <h5>{v.descricao}</h5>
        <p>Quantidade em estoque: {v.qtdEstoque}</p>
        <input type="number" placeholder='Qtd itens' onChange={(e) => setQtdPedido(e.target.value)}/>
        <h2>Preço: {v.valor}₽</h2>
        <Button className="btn-comprar" onClick={() =>{
          props.onHide();
          atualizaCarrinho(v);
        }}>Comprar</Button>
        </div>
      </container>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function ModalCards({produto}) {
  const [modalShow, setModalShow] = useState(false);
  v = produto

  return (
    <>
      <div cursor='pointer' onClick={() => setModalShow(true)}>
         <CardProduto key={produto.id} produto={produto} />
      </div>

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}/>
    </>
  );
}
