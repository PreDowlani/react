import React, { useState } from 'react'
import ElementoUnico from './ElementoUnico'
import { v4 as uuidv4 } from "uuid";


// 2-	Desarrollar los componentes necesarios para crear el miniblog. No más de tres. El miniblog será un array de objetos con autor, fecha y mensaje.
const Blog = (lista) => {

    const [miniBlog, setAñadirBlog] = useState ( [{
        id: 1,
        autor : 'Frank Herbert',
        fecha : '10/2/1958',
        mensaje : 'El misterio de la vida no es un problema a resolver, sino una realidad a experimentar'
    },
    {
        id : 2,
        autor : 'Anna Karenina, Leo Tolstoy',
        fecha : '15/04/1992',
        mensaje : 'Si buscas la perfección nunca estarás contento'
    },
    {
        id : 3,
        autor : 'Philip Roth',
        fecha : '20/08/2015',
        mensaje : 'Deja de preocuparte por envejecer y piensa en crecer '
    }
    ])

    const [nuevoAutor , setNuevoAutor] = useState([""])
    const [nuevaFecha , setNuevaFecha] = useState([""])
    const [nuevoMensaje , setNuevoMensaje] = useState([""])

    const setAutor =(event) => {
        setNuevoAutor(event.target.value)
    }

    const setFecha =(event) => {
        setNuevaFecha(event.target.value)
    }

    const setMensaje =(event) => {
        setNuevoMensaje(event.target.value)
    }

    const setSubmit = (e) => {
        e.preventDefault();
        setAñadirBlog ([
            ...miniBlog , {
                id : uuidv4(),
                autor : nuevoAutor,
                fecha : nuevaFecha,
                mensaje : nuevoMensaje
            }
        ])
    }
     

  return (
    <div id='miniblog'>
        {/* <div>
             <h2>Listar todos los mensajes: </h2>
             <ul>
                <li>{miniBlog[0].autor} {miniBlog[0].fecha} {miniBlog[0].mensaje}</li>
                <li>{miniBlog[1].autor} {miniBlog[1].fecha} {miniBlog[1].mensaje}</li>
                <li>{miniBlog[2].autor} {miniBlog[2].fecha} {miniBlog[2].mensaje}</li>
             </ul>
        </div> */}
        <div id='blog'>
            <h1>Listado de Mini Blog</h1>
            <ul>
                {miniBlog.map((datos) => (
                <ElementoUnico key={datos.id} autor={datos}/>
                ))}
            </ul>
            {/*  fecha={datos.fecha} mensaje={datos.mensaje} */}
                    
        </div>
        <div id='formularioB'>
        <h1>Añadir el Autor y su Mensaje :</h1>
        <br />
        <form onSubmit={setSubmit} action="">
        <label htmlFor="auto">Autor : </label>
        <input type="text" name="autor" id="autor" onChange={setAutor} value = {nuevoAutor}/>
        <br />
        <label htmlFor="fecha">Fecha : </label>
        <input type="date" name="date" id="date" onChange={setFecha} value={nuevaFecha} />
        <br />
        <label htmlFor="mensaje">Mensaje : </label>
        <input type="text" name="mensaje" id="mensaje" onChange={setMensaje} value={nuevoMensaje} />
        <br />
        <button id='enviarB' type="submit">Añadir</button>
        </form>
        </div>

    </div>

  
  )
}

export default Blog