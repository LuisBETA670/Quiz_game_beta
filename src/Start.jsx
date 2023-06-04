import { useNavigate } from 'react-router-dom'


function Start({setState}) {
  const Start = () => {
    setState(true);
  }
return (
  <div className='Start'>
    <h2 align="center"className='start' onClick={Start}>presiona aqui para iniciar</h2>
  </div>
)
}

export default Start