import React, { useState } from 'react';
import styled from 'styled-components'

//import '../styles/Cadastro.scss';

//Cadastro React + PHP
//https://celke.com.br/artigo/crud-como-criar-formulario-com-react-e-como-criar-a-api-com-php

const Cadastro = () => {
    const [usuario, setUsuario] = useState({
        nome: '',
        email: '',
        senha: ''
    });

    const valorInput = (e: any) => {
        setUsuario({...usuario, [e.target.name]: e.target.value});
    }
    
    const cadastrarUser = (e: any) => {
        e.preventDefault();//serve para ver o console log abaixo
        console.log(usuario.nome);
        console.log(usuario.email);
        console.log(usuario.senha);
    }    

    return(
        <>
            <div className="divMaior">
               
                <br/><br/>
               
                <h2>Cadastro de Usuários</h2>
                <form onSubmit={cadastrarUser}>
                    <label>
                        Nome:
                        <input type="text" name="nome" id="" className="nome" onChange={valorInput}/>
                    </label>
                    <br/>
                    <label>
                        Email:
                        <input type="text" name="email" id="" className="email" onChange={valorInput}/>
                    </label>
                    <br/>
                    <label>
                        Senha:
                        <input type="password" name="senha" id="" className="senha" onChange={valorInput}/>
                    </label>

                    <br/>
                    
                    <input type="submit" value="Cadastrar" />
                    {/*<button type="button" onClick={cadastrarUser}>Cadastrar</button>*/}
                </form>

            </div>
        </>
    )
}

export default Cadastro;