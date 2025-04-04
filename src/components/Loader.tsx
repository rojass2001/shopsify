
import { PulseLoader } from 'react-spinners'
function Loader() {
  return (
    <div className='w-full h-screen bg-red flex items-center place-content-center'>
      <PulseLoader color="black" size={16}/>
    </div>
  )
}

export default Loader
