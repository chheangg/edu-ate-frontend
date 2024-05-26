import { useNavigate } from 'react-router-dom';
import Logo from '../assets/logo.svg'

const LogoBtn = () => {
  const navigate = useNavigate()
  return (
    <button onClick={() => navigate('/')} className='outline-none bg-none'>
      <img className="h-8" src={Logo} />
    </button>
  )
}

export default LogoBtn;