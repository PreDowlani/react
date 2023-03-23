
import './App.css';
import Prueba from './components/Prueba';
import Lista from './components/Lista';


function App() {
  return (
    <div id='body'>
      <div id='ejer'>
                     <h1>Ejercico 1</h1>
        <h2>Muestra de un H1 y un H2</h2>
        <p> Este es un parrafo. Estamos aprendiendo React , y esperemos entender todo !! </p>
      </div>
        <div id='lista'>
            <ul>
                <h3>Lo que hemos aprendido hasta ahora : </h3>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
            </ul>
        </div>
        <hr/>
        <div>
          <Prueba />
        </div>
        <div>
          <Lista/>
        </div>
    </div>
  );
}

export default App;
