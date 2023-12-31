import { useState } from 'react'
import GorevFormu from './components/GorevFormu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className='container'
     style={{fontFamily:"cursive",
     width:"60%", marginTop:"30px"}}>
     <GorevFormu />
     </div>
    </>
  )
}

export default App
