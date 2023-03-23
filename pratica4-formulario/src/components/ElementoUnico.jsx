import React from 'react'

const ElementoUnico = ({autor}) => {
  return (
    <div id='autor'>
        <h3 key={autor.id}>Listado Mediante props :</h3>
        <br />
        <ul>
            <li>{autor.autor}</li>
            <li>{autor.fecha}</li>
            <li>{autor.mensaje}</li>
            <br />
        </ul>
    </div>
  )
}

export default ElementoUnico