
import React from 'react'
import Main from '../template/Main'

export default function home (props) {
  return ( 
  <Main icon="home" title="Início" subtitle="Segundo Projeto React">
    <div className="display-4">Bem Vindo!</div>
    <hr />
    <p className="mb-0">Sistema de cadastro de usuários</p>
  </Main>
)
}