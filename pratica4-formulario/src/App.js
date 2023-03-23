
import './App.css';
import Blog from './components/Blog';
import Usuarios from './components/Usuarios';


function App() {
  return (
    <div className="App">
      <div className='zona1'>
              <h1>Pratica 4 React 1845 : </h1>
          <Blog/>
      </div>
    
      <div className='zona2'>
            <div id='users'>         
               <Usuarios />       
            </div>
      </div>

    </div>
  );
}

export default App;
