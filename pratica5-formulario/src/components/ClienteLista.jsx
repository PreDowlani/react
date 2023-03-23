import React from 'react'

const ClienteLista = (lista) => {
        const nuevosClientes = lista.clientes
  return (
    <div className='lista'>
        <h3>Lista de Clientes : </h3>
        <div>
            {nuevosClientes.map((nueva) => {
                 return <ul>
                    <li><em>Nombre : </em> <strong>{nueva.nombre}</strong></li>
                    <li><em>Edad : </em> <strong>{nueva.edad}</strong></li>
                    <li><em>Sexo : </em><strong>{nueva.sexo}</strong> </li>
                    <li><em>Nacionalidad : </em><strong>{nueva.nacionalidad}</strong> </li>
                </ul>
            })}
        </div>
    </div>
  )
}

export default ClienteLista