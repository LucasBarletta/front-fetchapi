import React, {useState, useEffect} from 'react';
import "./EscolaCadastro.scss";
import Input from "../Input";
import {Link} from 'react-router-dom'


const Cadastrar = () => {
    const [nome, setNome] = useState ("");
    const [diretor, setDiretor] = useState ("");
    const [numeroAlunos, setnumeroAlunos] = useState ("");
    const [contatos, setContatos] = useState ("");
    const [localizacao, setLocalizacao] = useState ("");
    const [email, setEmail] = useState ("");
    //const [confirmEmail, setConfirmEmail] = useState ("");
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

        // fetch('http://localhost:8000/api/escola/',
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
          const novaEscola = {
            nome: nome,
            diretor: diretor,
            numeroAlunos:numeroAlunos,
            contatos: contatos,
            localizacao: localizacao,
            email:email,
            senha: senha
          }
          fetch('http://localhost:8000/api/escola/',
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(novaEscola)
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



          localStorage.setItem(`Dados${count}`, JSON.stringify(novaEscola));
          setCount(count + 1);
          setNome("");
          setEmail("");
          
          setSenha("");
          resposta("Cadastro realizado com sucesso")
        }else{
          resposta("Os emails não correspondem");
          
        }
    
        }
    return (
        <div className="cadastro">
        <h1>Cadastre-se</h1>
        <form onSubmit={handleSubmit}>
    
        <Input
            value={nome}
            type="text"
            label="Nome"
            placeholder="Nome completo"
            atualizarState={setNome}
            />            
            <Input
            value={diretor}
            type="text"
            label="Diretor"
            placeholder="Diretor"
            atualizarState={setDiretor}
            />            
            <Input
            value={numeroAlunos}
            type="text"
            label="Quantidade de Alunos"
            placeholder="Quantidade de alunos"
            atualizarState={setnumeroAlunos}
            />            
            <Input
            value={contatos}
            type="text"
            label="Telefone"
            placeholder="Telefone"
            atualizarState={setContatos}
            />          
            <Input
            value={localizacao}
            type="text"
            label="Local"
            placeholder="Local"
            atualizarState={setLocalizacao}
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
    
            <Input type="submit" value="Cadastrar"/>
              
            </form> 
          </div>
        )
}
export default Cadastrar;