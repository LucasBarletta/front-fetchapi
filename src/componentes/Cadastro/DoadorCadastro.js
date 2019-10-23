import React, { useState } from 'react';
import "./DoadorCadastro.scss";
import Input from "../Input";

const DoadorCadastro = () => {
    const [nome, setNome] = useState("");
    const [idade, setIdade] = useState ("");
    const [localizacao, setLocalizacao] = useState ("");
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState ("");
    const [senha, setSenha] = useState ("");
    const [count, setCount] = useState(0);
    const [mensagem , setMensagem] = useState("");

    
    
    
        const resposta = (texto) =>{
            setMensagem(texto)
            setTimeout(() =>{
              setMensagem("")
            }, 2000)
          }
    
        const handleSubmit = e =>{
            e.preventDefault();
    
            console.log("Opa")
    
            // fetch('http://localhost:8000/api/doador/',
            //   {
            //     headers: {
            //       'Content-Type': 'application/json'
            //     }
            //   }
            // ).then(response => {
            //     return response.json()
            // }).then(response => {
            //     alert(response)
            // })
    
          
            if(email === email){
              const novoDoador = {
                nome: nome,
                idade: idade,
                cpf: cpf,
                localizacao: localizacao,
                email:email,
                senha: senha
              }
              fetch('http://localhost:8000/api/doador/',
                {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(novoDoador)
                }
              ).then(response => {
                  return response.json()
              }).then(response => {
                if(response.id) {
                  alert("criado com sucesso")
                }else{
                  alert("Deu ruim")
                }
              })
    
    
    
              localStorage.setItem(`Dados${count}`, JSON.stringify(novoDoador));
              setCount(count + 1);
              setNome("");
              setIdade("");
              setCpf("");
              setLocalizacao("");
              setEmail("");
              setSenha("");
              resposta("Cadastro realizado com sucesso")
            }else{
              resposta("Os emails não correspondem");
              
            }
        
            }

    return (
    <div className="DoadorCadastro">
        <h1>Faça o seu Cadastro!</h1>
        <form onSubmit={handleSubmit}>
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
            value={localizacao}
            type="text"
            label="Local"
            placeholder="Local"
            atualizarState={setLocalizacao}
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