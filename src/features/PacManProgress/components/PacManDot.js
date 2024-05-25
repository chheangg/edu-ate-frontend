import LoadedDotIcon from '../assets/loaded-dot.svg'
import UnloadedDotIcon from '../assets/unloaded-dot.svg'

const PacManDot = ({ isLoaded }) => {
  return (
    <div className='relative ease-in-out duration-700'>
      <img className='absolute top-0' src={LoadedDotIcon} />
      <img className={'relative transition-opacity ease-in-out duration-500' + ` ${isLoaded ? 'opacity-0' : null}`} src={UnloadedDotIcon} />
    </div>
  )
}

export default PacManDot;