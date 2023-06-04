import { useState } from 'react'
import CaptureList from './components/CaptureList'

function Game() {

  const [listQuestions, setListQuestions] = useState([
    {
      id: '1',
      number: '1',
      question: '¿?'
    },
  ])
  
  return (
    // <div className='Game'>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-12">
            <div className='title'>
              <h2>QUIZGAME</h2>
            </div>
          </div>
          {
            listQuestions.map((item) => {
              <div className='row'>
                <div className="col">
                  <div class="card">
                    <h5 class="card-header">{item.number}</h5>
                    <div class="card-body">
                    <p class="card-text">{item.question}</p>
                    </div>
                  </div>
                  <button 
                  onClick={handleNewQuestionButton} 
                  type="button" 
                  className="btn btn-outline-primary">
                    <i className="bi bi-plus-circle-fill"></i>
                  </button>            
                </div>
                <div className="col">
                  <h3>GAME</h3>
                </div>
              </div>
            })
          }
          
        </div>
      </div>
    // </div>
  )
}

export default Game