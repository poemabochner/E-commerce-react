import "./style.css"
import { Link } from 'react-router-dom'

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Header } from "../../components/Header";


function Login() {
  return (
    <>
    <header>
        <Header />
    </header>
    <div className="main">
    <div className="loginBox">
    <Form>
      <div className="loginTitulo">
        <img src="src/pages/Login/pokemon-trainer.png"></img>
        <h3>login do cliente</h3>
      </div>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>e-mail</Form.Label>
        <Form.Control type="email" placeholder="digite seu e-mail" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>senha</Form.Label>
        <Form.Control type="password" placeholder="digite sua senha" />
      </Form.Group>
      
      <div className="button">
      <Button className="button1">
        Continuar
      </Button>
      </div>
    </Form>
    </div>
    </div>
    </>
  );
}

export default Login;