import React from 'react'

// 3 – Crear otro componente que muestre un formulario (nombre, email, contraseña, botón enviar) con estilos y centrado. 
// 4 – Añadir el componente anterior al componente App.

const Prueba = () => {
  return (
    <div id='formulario'>
        <h1>Crear un Formulario : </h1>
        <form action="">
            <div id='datos-personales'>
                <label htmlFor="nombre">Introduzca su nombre completo: </label>
                <input type="text" name='nombre' id='nombre' placeholder='nombre y apellido' required />
                <br />
                <label htmlFor="email">Introduzca su E-mail: </label>
                <input type="email" name="email" id="email" placeholder='su email' required />
                <br />
                <label htmlFor="password">Su contraseña: </label>
                <input type="password" name="password" id="password" placeholder='contraseña' required />
            </div>
            <br />
            <div id='enviar'>
                <button>Enviar</button>
            </div>
                <hr />
        </form>
    </div>
  )
}

export default Prueba