import React from 'react';
import { Link } from 'react-router-dom';
import "./Cadastro.scss";

const Cadastro = () => {
    return (
    <div className="Cadastro">
        <h1>Escolha um opção:</h1>
        <Link to="/escola"><button>Escola</button>
        </Link>
        <Link to="/doador"><button>Doador</button></Link>
    </div>
    );
}
export default Cadastro;