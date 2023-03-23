import React from 'react'

function Lista() {
    const  listas=['https://lenguajehtml.com/html/','https://lenguajejs.com/javascript/',
                    'https://reactjs.org/','https://desarrolloweb.com/home/css'];
  return (
    <div>
        <div id='ejer5'>
            <h1>Ejercicio 5 </h1>
            <h3>Crear una Lista (HTML)</h3>
        </div>
        <div id='liHTML'>
            <ul>
                <li><a href={listas[0]}>HTML5</a> </li>
                <li><a href={listas[1]}>JAVASCRIPT</a> </li>
                <li><a href={listas[2]}>REACT</a></li>
                <li><a href={listas[3]}>CSS</a> </li>                
            </ul>
        </div>
    </div>
  )
}

export default Lista