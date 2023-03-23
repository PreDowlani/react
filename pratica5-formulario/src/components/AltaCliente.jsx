import React,{ useState } from 'react';
import { v4 as uuidv4 } from "uuid";

const AltaCliente = ({onNewClients}) => {

    const[error , setError] = useState(false);
    const[nuevoNombre, setNuevoNombre] = useState("")
    const[nuevoEdad, setNuevoEdad] = useState("")
    const[nuevoSexo, setNuevoSexo] = useState("")
    const[nuevoNacionalidad, setNuevoNacionalidad] = useState("")

    const setNombre = (event) => {
        setNuevoNombre(event.target.value)
      }
    
      const setEdad = (event) => {
        setNuevoEdad(event.target.value)
      }
    
      const setSexo =(event) => {
        setNuevoSexo(event.target.value)
      }
    
      const setNacionalidad =(event) => {
        setNuevoNacionalidad(event.target.value)
      }

      const gestorEnviar = (e) => {
        e.preventDefault();
        setError(false);
        if (
          nuevoNombre.trim() === "" ||
          nuevoEdad.trim() === "" 
        ) {
          setError(true);
          return;
        }

      const añadirCliente = {
        id : uuidv4(),
        nombre : nuevoNombre,
        edad : nuevoEdad,
        sexo : nuevoSexo,
        nacionalidad : nuevoNacionalidad
      };

      onNewClients(añadirCliente);
      setNuevoNombre("")
      setNuevoEdad("")
      setNuevoSexo("")
      setNuevoNacionalidad("")

    }

  return (
    <div className='formulario'>
        <div id='alta'>
            <h3>Alta de los Clientes :</h3>
        </div>
        <div className='form'>
                <h2>Creamos el Formulario :</h2>
                {error ? (<h3>Porfavor rellene todos los datos</h3>) : null }
            <form onSubmit={gestorEnviar} action="">
                <br />
                <label htmlFor="nombre">Nombre : </label>
                <input type="text" name='nombre' id='nombre' placeholder='introduzca su nombre'
                onChange={setNombre} value={nuevoNombre} />
                <br />
                <label htmlFor="edad">Edad : </label>
                <input type="number" name="edad" id="edad" placeholder='su edad' min={18} max={70}
                onChange={setEdad}  value={nuevoEdad}  />
                <br />
                <label htmlFor="sexo">Sexo : </label>
                <label htmlFor="hombre">Hombre </label>
                <input type="radio" name="" id="sexo" onChange={setSexo}  value='hombre'  checked={nuevoSexo === 'hombre'} />
                <label htmlFor="mujer">Mujer </label>
                <input type="radio" name="mujer" id="sexo" onChange={setSexo} value='mujer' checked={nuevoSexo === 'mujer'}/>
                <br />
                <label htmlFor="nacionalidad">Nacionalidad : </label>
                <select name="nacionalidad" id="nacionalidad" onChange={setNacionalidad} value={nuevoNacionalidad} > 
                    <option value="">¿país?</option>
                    <option value="España">España</option>
                    <option value="Inglaterra">Inglaterra</option>
                    <option value="India">India</option>
                    <option value="USA">Estados Unidos</option>
                </select>
                <br />
                <button id='añadir' type="submit">Añadir</button>
            </form>

        </div>
    </div>
        )
    
}

export default AltaCliente;