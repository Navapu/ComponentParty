import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from "./UserCard"



function App() {
  const people = [{
    name: 'Alejandro',
    age: 20,
    job: "Web developer"
  }, {
    name: 'Ruben',
    age: 45
  }, {
    name: 'Oscar',
    age: 30,
    job: 'Teacher'
  }]
  return (
    <>
      {people.map(({ name, age, job }) => {
        return (
          <UserCard name={name} age={age} job={job} />
        )
      })}
    </>
  )
}

export default App
