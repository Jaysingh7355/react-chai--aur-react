import { useState } from 'react';
import './App.css'

function App() {
  let [counter,setCouter] = useState(15)
 
  // let counter = {couter};
  const AddValue = () =>{
    setCouter(counter+1)
  }
  const RemoveValue = () =>{
    setCouter(counter-1)
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>counter value:{counter}</h2>

    <button onClick={AddValue}>add value{counter}</button>
    <br />
    <button onClick={RemoveValue}>Remove value{counter}</button>
    <p>footer{counter}</p>
    </>
  )
}

export default App
