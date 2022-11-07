import Carousel from 'react-bootstrap/Carousel';
import './styles.css'

function Carrossel() {
  return (
    <div className='carrosselDiv'>
      <div className='carrosselDiv2'>
    <Carousel fade className='carrossel'>
        <Carousel.Item interval={5000}>
        <img
          className="carrossel1"
          src="/src/components/Carrossel/961007.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Nome do Produto</h3>
          <p>descrição e preço</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="carrossel2"
          src="/src/components/Carrossel/807241.png"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Nome do Produto</h3>
          <p>descrição e preço</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img
          className="carrossel3"
          src="/src/components/Carrossel/979991.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
        <h3>Nome do Produto</h3>
          <p>descrição e preço</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </div>
  );
}

export default Carrossel;