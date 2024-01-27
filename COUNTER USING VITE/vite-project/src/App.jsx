import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function Counter() {
    const [count, setCount] = useState(0)
    
    function  IncreasehandleCount() {
      return (
        setCount(count+1)
      )
    }
    function  decreasehandleCount() {
      return (
        setCount(count-1)
      )
    }
  return(
    <>
    <h1>Count:{count}</h1>
      <button onClick={IncreasehandleCount } disabled={count >=20}>Increase</button>
      <button onClick={decreasehandleCount } disabled={count<=0} >Decrease</button>
    </>
  )
};



function App() {

  return (
    <>
     <Counter />
    </>
  )
}

export default App
