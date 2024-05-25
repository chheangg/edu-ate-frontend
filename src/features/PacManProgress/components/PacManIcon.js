import LoadedPacMan from '../assets/loaded-pac-man.svg'
import UnloadedPacMan from '../assets/unloaded-pac-man.svg'

const PacManIcon = ({ isLoaded, index }) => {
  return (
    <div className='relative transition-all'>
      <span className='absolute left-[50%] transform translate-x-[-50%] text-xl font-bold z-[1] text-primary-black'>{index}</span>
        <img className='absolute top-0' src={LoadedPacMan} />
        <img className={'relative transition-opacity ease-in-out duration-500' + ` ${isLoaded ? 'opacity-0' : null}`} src={UnloadedPacMan} />
    </div>
  )
}

export default PacManIcon