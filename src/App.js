import './App.css';
import Boton from './componentes/Boton';
import Contador from './componentes/Contador';
import freeCodeCampLogo from "./imagenes/FreeCodeCamp_logo.svg.png";
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0)

  const manejarClic = () => {
    setNumClics(prevState => prevState + 1)
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="Logo de freeCodeCamp"
          />
        </div>
        <div className='contenedor-principal'>
          <Contador
          numClics={numClics}
          />
          <Boton
          texto="Clic"
          esBotonDeClic={true}
          manejarClic={manejarClic}
          >
          </Boton>
          <Boton
          texto="Reinicar"
          esBotonDeClick={false}
          manejarClic={reiniciarContador}
          ></Boton>
        </div>
    </div>
  );
}

export default App;
