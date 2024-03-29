import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from'./components/card'
function App() {
  const [count, setCount] = useState(0)
let objeNew={
  username:'afi',
  age:23
}
let arr=[1,2,3,4,5]
  return (
    <>
   <h1 className='bg-green-400 text-black-200 p-4 rounded-xl mb-4'>Tailwind Css</h1>
  {/* <Card username='test1' firstObj={objeNew} firstArray={arr}/> */}
  <Card username='Dany' btnText='Click Me'/>
  <br />
  <Card username='Pretty' btnText='Press'/>
    </>
  )
}

export default App
