import React, { useState } from 'react';
import "./DoadorCadastro.scss";
import Input from "../Input";

const DoadorCadastro = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState ("");
    const [local, setLocal] = useState ("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState ("");
    const [confirmEmail, setConfirmEmail] = useState ("");
    const [senha, setSenha] = useState ("");

    return (
    <div className="DoadorCadastro">
        <h1>Faça o seu Cadastro!</h1>
        <form>
            <Input
            value={nome}
            type="text"
            label="Nome"
            placeholder="Nome completo"
            atualizarState={setNome}
            />            
            <Input
            value={idade}
            type="number"
            label="Idade"
            placeholder="Idade"
            atualizarState={setIdade}
            />            
            <Input
            value={local}
            type="text"
            label="Local"
            placeholder="Local"
            atualizarState={setLocal}
            />            
            <Input
            value={cpf}
            type="text"
            label="CPF"
            placeholder="CPF"
            atualizarState={setCpf}
            />            
            <Input
            value={email}
            type="email"
            label="E-mail"
            placeholder="E-mail"
            atualizarState={setEmail}
            />            
            <Input
            value={confirmEmail}
            type="text"
            label="Confirmação de Email"
            placeholder="Confirmação de E-mail"
            atualizarState={setConfirmEmail}
            />            
            <Input
            value={senha}
            type="password"
            label="Senha"
            placeholder="Senha"
            atualizarState={setSenha}
            />  
            <button className="botao">Cadastrar</button>          
        </form>
    </div>
    );
}
export default DoadorCadastro;