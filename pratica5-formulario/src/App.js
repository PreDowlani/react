import './App.css';
// import Formulario from './components/Formulario';
import { v4 as uuidv4 } from "uuid";
import { useState } from 'react';
import AltaCliente from './components/AltaCliente';
import ClienteLista from './components/ClienteLista';

function App() {
  const altaClientes = {
    id: uuidv4(),
    nombre : 'Pre',
    edad : 30,
    sexo : 'hombre',
    nacionalidad : 'España',
  }

  const [clientes, setClientes] = useState([altaClientes])
  
  const creaNuevoCliente = (client) => {
    setClientes([...clientes,client])
  }

  return (
    <div className="App">
      <header className="header">
        <h1>Práctica 6 - React Liffting State :</h1>
        {/* <Formulario /> */}
      </header>
      <br/>
      <div className='contenedor'>
              <div className='altaCliente'>
                <AltaCliente  onNewClients={creaNuevoCliente}/>
              </div>
            <div className='clienteLista'>
              <ClienteLista clientes={clientes} />
            </div>
      </div>

    </div>
  );
}

export default App;
