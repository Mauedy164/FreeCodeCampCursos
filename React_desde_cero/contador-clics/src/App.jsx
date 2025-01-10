import './App.css'
import logo from './imagenes/png-clipart-free-code-camp-logo-icons-logos-emojis-tech-companies.png'
import {Boton} from './componentes/Boton'
import { Contador } from './componentes/Contador';
import { useState } from 'react';


function App() {

  const manejarClic = () => {
    setNumClics(numClics +1);
  }

  const reiniciarContador = () => {
    setNumClics(0)
  }

  const [numClics, setNumClics] = useState(0);

  return(
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img className='freecodecamp-logo' src={logo} alt='logo de freecodecamp'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics} />
        <Boton
        texto="Clic"
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
       <Boton
        texto="Reiniciar"
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  )
}

export default App
