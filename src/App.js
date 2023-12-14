import freecodecamplogo from './imagenes/freecodecamp.png';
import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1);
  }
  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo'
        src={freecodecamplogo}
        alt='logo de freecodecamp' />
      </div>
      <div className='contenedor-principal'>
        <Contador numClics = {numClics} />
        <Boton 
        text = 'Click'
        esBotonDeClic = {true}
        manejarClic = {manejarClic} />
        <Boton 
        text = 'Reiniciar'
        esBotonDeClic = {false}
        manejarClic = {reiniciarContador} />
        
      </div>
    </div>
  );
}

export default App;
