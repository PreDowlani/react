
import './App.css';
import {BrowserRouter as Router,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Usuarios from './components/Usuarios';
import Contacto from './pages/Contacto';
import Navbar from './components/Navbar';
import NotFound from './pages/NotFound';
import EndBar from './components/EndBar';



function App() {
  return (
    <div className="App">
      <div className='main'>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/usuarios' element={<Usuarios />}/>
          <Route path='/usuario' element={<Navigate to={'/usuarios'}/>}/>
          <Route path='/notfound' element={<NotFound/>} />         
        </Routes> 
        <EndBar/>
               <Routes>
          <Route path='/contacto' element={<Contacto/>} />
        </Routes>
      </Router>
      </div>


    </div>

  );
}

export default App;
