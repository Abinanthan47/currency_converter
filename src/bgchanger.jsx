import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('blue')

  function changecolor(){
    setcolor('red');
    <h1 className='text-white'>STOP</h1>
    
  }

  return (
    <>
      <div className='w-full h-screen duration-500 ' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap  justify-center gap-8 shadow-lg bg-white px-5 py-2 rounded-3xl '>
            <button className='bg-red-500 rounded text-white' onClick={changecolor }>Red</button>
            <button className='bg-yellow-500 rounded text-white' onClick={()=> setcolor('yellow')}>Yellow</button>
            <button className='bg-green-500 rounded text-white'onClick={()=> setcolor('green')}>Green</button>
          </div>
        </div>

      </div>
    </>
  )
}

export default App