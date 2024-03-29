import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 let [counter,setCounter]=useState(0)
  // let counter=5
function addValue(){
  // counter=counter+1
  // console.log(counter);
 if(counter<25){
  setCounter(counter+1)
 }
}

function removeValue(){
  if(counter>0){
    counter=counter-1
  setCounter(counter)
  }
}

  return (
    <>
    <h1>Counter App</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value:{counter}</button>
    <br/>
    <br/>
    <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
