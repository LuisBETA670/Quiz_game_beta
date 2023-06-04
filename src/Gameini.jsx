import { useState } from "react"
import DropAnswer from "./components/DropAnswer";
import { Link } from "react-router-dom";


function GameHi() {
  

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-md-12">
          <div className='title'>
            <h2 className="coltitle">JUEGO DE PREGUNTAS</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Link to='/Captura'>
            <span className="coltitle">CAPTURA AQUI TUS PREGUNTAS</span>
          </Link>
        </div>
        <div className="col-md-6">
          <Link to='/Game'>
            <span className="coltitle">INICIAR EL JUEGO</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Gameini
