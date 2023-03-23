import React, { useState } from 'react'
import Listar from './Listar'
import { v4 as uuidv4 } from "uuid";

const Usuarios = () => {

    const usuarios = [{
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
    }]

    const [nuevosUsuarios , setUsuarios] = useState([
      {
        id : uuidv4(),
        nombre : 'pepe',
        apellido : 'leon',
        edad : 25,
        email : 'pepeleon123@loco.com',
        password : 'locopepe2525' 
      }
    ])

    const setEnviar = (e) => {
      e.preventDefault();
      setUsuarios([
        ...nuevosUsuarios , {
          id : uuidv4(),
          nombre : nuevoNombre,
          apellido : nuevoApellidos,
          edad : nuevoEdad,
          email : nuevoEmail,
          password : nuevoPassword
        },
      ]);
      console.log(nuevosUsuarios)
    }

    const [nuevoNombre, setNuevoNombre] = useState([""]);
    const [nuevoApellidos, setNuevoApellidos] = useState([""]);
    const [nuevoEdad, setNuevoEdad] = useState([""]);
    const [nuevoEmail, setNuevoEmail] = useState([""]);
    const [nuevoPassword, setNuevoPassword] = useState([""]);


    const setNombre =(event) => {
      setNuevoNombre(event.target.value)
    }

    const setApellidos =(event) => {
      setNuevoApellidos(event.target.value)
    }

    const setEdad =(event) => {
      setNuevoEdad(event.target.value)
    }

    const setEmail =(event) => {
      setNuevoEmail(event.target.value)
    }

    const setPassword =(event) => {
      setNuevoPassword(event.target.value)
    }

  

  return (
    <div>
      <div id='marvel'>
          <h1>Usuario del Sistema : </h1>
          {usuarios.map((users) => (
          <Listar key={users.id} agentes={users}/>
          ))}

      </div>
      <div className='formulario'>
        <h2>Formulario en REACT.</h2>
        <form onSubmit={setEnviar} action="">
          <br />
          <label htmlFor="nombre">Nombre</label>
          <input type="text" name='nombre' id='nombre' placeholder='Introduzca su nombre' onChange={setNombre}
          value = {nuevoNombre} />
          <br />
          <label htmlFor="apellidos">Apellidos</label>
          <input type="text" name="apellido" id="apellido" placeholder='Introduzca sus apellidos' onChange={setApellidos} value = {nuevoApellidos} />
          <br />
          <label htmlFor="edad">Edad</label>
          <input type="number" name="edad" id="edad" placeholder='su edad' onChange={setEdad}  value = {nuevoEdad} />
          <br />
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder='su e-mail' onChange={setEmail} value = {nuevoEmail}  />
          <br />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" placeholder='su contraseña' maxLength={10} onChange={setPassword} value = {nuevoPassword}  />
          <br />
          <button type="submit">Enviar</button>

        </form>

      </div>
    </div>
  )
}

export default Usuarios