import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Doctors from './Doctors'
import Politician from './Politician'
import Counter from './Counter'
import Batsman from './Batsman'



function App() {
  const [count, setCount] = useState(0)
  const doctors = ['Rahim', 'Karim', 'Babul'];
  const politicians = [
    { id: 1, name: 'Osman Hadi', age: 32, Ashon: 'Dhaka-08' },
    { id: 2, name: 'Mohiuddin Roni', age: 28, Ashon: 'Dhaka-18' },
    { id: 3, name: 'Nasir Pathwary', age: 28, Ashon: 'Dhaka-08' },
    { id: 4, name: 'Hasnat Abdullah', age: 27, Ashon: 'Cumilla-04' },
    { id: 5, name: 'Nahid Islam', age: 31, Ashon: 'Dhaka-13' }
  ]

  function handleClick() {
    alert('Hi I am Clicked')
  }
 const handleClick3=()=>{
  alert ('This is Clicked 3')
 }

 const addTen=(num)=>{
  const newNum=num+10;
  alert(newNum);
 }
  
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Vite + React</h3>
      <Batsman></Batsman>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>
      <button onClick={function handleClick2(){alert('hi this is click2')}}>Click 2</button>
      <button onClick={handleClick3}>Click 3</button>
      <button onClick={()=>{alert('hi this is click 4')}}>Click 4</button>
      <button onClick={()=>addTen(2200)}>Click Add 10</button>
      {/* {
        politicians.map(politician=><Politician politician={politician}></Politician>)
      }
      {
        doctors.map(doctor => <Doctors doctor={doctor}></Doctors>)
      } */}
      {/* <Doctors></Doctors> */}
      {/* <Person></Person>
      <Student name='Tamanna Parvez' age='27' versityName='IUBAT' ></Student>
      <Student name='Pinky' age='25' versityName='IUBAT' ></Student>
      <Student name='Shetu' age='24' versityName='IUBAT' ></Student>
      <Student name='' age='28' versityName='IUBAT' ></Student> */}

    </>
  )
}

function Person() {
  return (
    <h1> This is First Own Practice</h1>
  )
}

function Student({ name, age, versityName }) {
  return (
    <div className='students'>
      <p> Student Name: {name}</p>
      <p> Age: {age}</p>
      <p>University Name: {versityName}</p>
    </div>

  )
}
export default App
