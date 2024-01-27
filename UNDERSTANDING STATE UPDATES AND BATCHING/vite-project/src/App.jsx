import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const hanldeClick = () => {
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
    setCount((prevCount)=>prevCount+1);
 
    console.log(count);
  }
  return (
    <>
      <p>Button is clicked {count} times</p>
      <button onClick={hanldeClick}> click me</button>
      
    </>
  )
}
// function App() {
//   const [count, setCount] = useState(0)
//   const hanldeClick = () => {
//     setCount(count + 1);
//     setCount(count + 1);
//     setCount(count + 1);
//     console.log(count);
//   }
//   return (
//     <>
//       <p>Button is clicked {count} times</p>
//       <button onClick={hanldeClick}> click me</button>
      
//     </>
//   )
// }
// function App() {
//   const [count, setCount] = useState(0)
//   const hanldeClick = () => {
//     setCount(count + 1);
//     console.log(count);
//   }
//   return (
//     <>
//       <p>Button is clicked {count} times</p>
//       <button onClick={hanldeClick}> click me</button>
      
//     </>
//   )
// }

export default App
