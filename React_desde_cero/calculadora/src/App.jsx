import './App.css'
import img from './imagenes/png-clipart-free-code-camp-logo-icons-logos-emojis-tech-companies.png';
import { Boton } from './componentes/Boton';
import { Pantalla } from './componentes/Pantalla';
import { BotonClear } from './componentes/BotonClear';
import { useState } from 'react';
import {evaluate} from 'mathjs'

function App() {

  const [input, setInput] = useState("")

  const agregarInput= valor => {
    setInput(input + valor)
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input))
    } else {
      alert("Ingrese valores para realizar la operación")
    }
  }
  return(
    <div className='App'>
{/*       <div className='freecodecamp-logo-contenedor'>
        <img src={img} alt="logo de freecodecamp" 
        className='freecodecamp-logo'/>
      </div> */}
      <div className='contenedor-calculadora'>
        <div>
          <Pantalla 
          input={input}
          />
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
          <BotonClear manejarClear={()=> setInput('')}>
            Clear
            </BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
