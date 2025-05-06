import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from "./UserCard"



function App() {
  const people = [{
    id: 1,
    name: 'Alejandro',
    age: 20,
    job: "Web developer"
  }, {
    id: 2,
    name: 'Ruben',
    age: 45
  }, {
    id: 3,
    name: 'Oscar',
    age: 30,
    job: 'Teacher'
  }]
  return (
    <>
      {people.map(({ id, name, age, job }) => {
        return (
          <UserCard id={id} name={name} age={age} job={job} />
        )
      })}
    </>
  )
}

export default App
