import "./App.css";
import {useState} from 'react';
import {v4 as uuidv4} from 'uuid';


// useState
function App() {

  const [contador, setContador] = useState(0)
  const [ratonSobre, setRatonSobre] = useState(false);
  const nuevoObjeto = {
    id: uuidv4(),
    nombre: 'Pepe'
  }

  const gestionRatonSobre = () => {
    setRatonSobre(true)
  }

  const gestionRatonFuera = () => {
    setRatonSobre(false)
  }
  console.log(nuevoObjeto)
  // useState devuelve un array con dos elementos: estado inicial y función modificadora
  // let contador = 0;
  // const incrementa = () => {
  //   contador++;
  //   console.log(contador)
  // }
  const incrementa = () => {
    setContador(contador +1 );
  }

  
  return <div>
    <h1>{contador}</h1>
    <button 
      style={{backgroundColor:ratonSobre ? 'green': 'blue'}}
      onClick={incrementa} onMouseOver={gestionRatonSobre} onMouseOut={gestionRatonFuera}
      >Click +1</button>
  </div>;
}

export default App;
