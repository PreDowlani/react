import React from 'react'

const Listar = ({agentes}) => {
  return (
    <div id='agentes'>
        <h3 key={agentes.id}>Trabajadores de MARVEL :</h3>
        <br />
        <ol>
            <li>{agentes.nombre}</li>
            <li>{agentes.email}</li>
            <li>{agentes.nickname}</li>
            <br />
        </ol>
    </div>
  )
}

export default Listar