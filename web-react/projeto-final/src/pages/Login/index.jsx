import "./style.css";

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Header } from "../../components/Header";
import api from "../../services/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



function Login() {
  const [login, setLogin] = useState();
  const [senha, setSenha] = useState();
  const [usuario, setUsuario] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const usuarios = async() => {
      const res = await api.get('/usuario');
      setUsuario(res.data);
    }
    usuarios();
    }, []);

    function verificaLogin(){
      usuario.map((u) => { 
        if(u.email == login){
         if(u.senha == senha){
          navigate('/');
        }
    }
    alert("E-mail ou Senha inválidos");
  })
}

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
              <Form.Control type="email" placeholder="digite seu e-mail" onChange={(e)=>setLogin(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>senha</Form.Label>
              <Form.Control type="password" placeholder="digite sua senha" onChange={(e)=>setSenha(e.target.value)}/>
            </Form.Group>

            <div className="button">
              <Button className="button1" onClick={verificaLogin}>
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