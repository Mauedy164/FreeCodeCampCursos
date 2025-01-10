import './App.css'
import './hojas-de-estilo/Testimonio.css'
import { Testimonio } from './componentes/Testimonios.jsx'


function App() {
  return (
    <>
    <div className='App'>
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen algunos de nuestro alumnos sobre FreeCodeCamp</h1>
      <Testimonio
      nombre="Roberto Hernández"
      pais="EUA"
      numeroImagen={1}
      cargo="Ingeniero de Software"
      empresa="Spotify"
      testimonio="Siempre he tenido problemas para aprender JavaScript. He tomado muchos cursos, pero el curso de freeCodeCamp fue el que se quedó. Estudiar JavaScript, así como estructuras de datos y algoritmos en freeCodeCamp me dio las habilidades y la confianza que necesitaba para conseguir el trabajo de mis sueños como ingeniero de software en Spotify."
      />
      <Testimonio
      nombre="Saúl Mercado"
      pais="Suecia"
      numeroImagen={2}
      cargo="Analista de Datos"
      empresa="Amazon"
      testimonio="freeCodeCamp fue la puerta de entrada a mi carrera como desarrollador de software. El plan de estudios bien estructurado llevó mis conocimientos de programación de un nivel de principiante total a un nivel muy seguro. Era todo lo que necesitaba para conseguir mi primer trabajo de desarrollador en una empresa increíble."
      />
    <Testimonio
      nombre="Juan Hernández"
      pais="México"
      numeroImagen={3}
      cargo="Ingeniero en Software"
      empresa="Mercado Libre"
      testimonio="Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."
      />
      </div>
    </div>
    </>
  )
}

export default App
