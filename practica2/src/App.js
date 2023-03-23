
import './App.css';
import Blog from './components/Blog';
import Usuarios from './components/Usuarios';

function App() {

  let hayMensajes = true;
   const random = Math.floor(Math.random() *2) ;
   random === 1 ? (hayMensajes=true) : (hayMensajes = false);


  return (
    <div>
  
    <div className ='main'>
      
      <div className='zona1' >
        <div id='flex-blog'>
          {hayMensajes ? 
           (<Blog />) :
           (<h2> No hay Mensajes !!</h2>) 
          
        }     
        </div>
      </div>
        <div className='zona2'>
            <div id='users'>         
               <Usuarios />       
            </div>

  
          </div>
          
    </div>
    </div>

  );
}

export default App;
