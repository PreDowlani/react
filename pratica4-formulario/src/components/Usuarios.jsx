import React, { useState } from 'react'
import Listar from './Listar'
import { v4 as uuidv4 } from "uuid";

const Usuarios = () => {

    const [usuarios, setUsuarios] = useState ([{
        id : 10,
        nombre :'Peter Parker',
        email : 'spiderLoco@marvel.com',
        nickname : 'Spider Man'
    },
    {
      id : 11,
      nombre :'Tony Stark',
      email : 'multimillonarioTony@marvel.com',
      nickname : 'Iron Man'
    },
    {
      id : 12,
      nombre :'Steve Rogers',
      email : 'vengadorMaricon@marvel.com',
      nickname : 'Capitan America'
    }])


    const setEnviar = (e) => {
      e.preventDefault();
      setUsuarios([
        ...usuarios , {
          id : uuidv4(),
          nombre : nuevoNombre,
          email : nuevoEmail,
          nickname : nuevoNickName
 
        },
      ]);
      console.log(usuarios)
    }

    const [nuevoNombre, setNuevoNombre] = useState("");
    const [nuevoEmail, setNuevoEmail] = useState("");
    const [nuevoNickName, setNuevoNickName] = useState("");


    const setNombre =(event) => {
      setNuevoNombre(event.target.value)
    }

    const setEmail =(event) => {
      setNuevoEmail(event.target.value)
    }

    const setNickName =(event) => {
      setNuevoNickName(event.target.value)
    }

  

  return (
    <div>
      <div id='marvel'>
          <h1>Usuario del Sistema : </h1>
          {usuarios.map((users) => (
          <Listar key={users.id} agentes={users}/>
          ))}

      </div>
      <div className='formularioU'>
        <h2>Formulario para Añair Usuario.</h2>
        <form onSubmit={setEnviar} action="">
          <br />
          <label htmlFor="nombre">Nombre : </label>
          <input type="text" name='nombre' id='nombre' placeholder='Introduzca su nombre' onChange={setNombre}
          value = {nuevoNombre} />
          <br />
          <label htmlFor="email">E-mail : </label>
          <input type="email" name="email" id="email" placeholder='su e-mail' onChange={setEmail} value = {nuevoEmail}  />
          <br />
          <label htmlFor="nickname">Nick Name : </label>
          <input type="text" name="nickname" id="nickname" onChange={setNickName} value={nuevoNickName} />
          <br />
          <button id='enviarU' type="submit">Enviar</button>

        </form>

      </div>
    </div>
  )
}

export default Usuarios