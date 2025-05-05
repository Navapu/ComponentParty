import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './TaskList'

function App() {
  const task = [
    { id: 1, name: 'Study React', completed: true },
    { id: 2, name: 'Read a book', completed: false },
    { id: 3, name: 'Improve my climbing skills', completed: false },
    { id: 4, name: 'Learn to cook', completed: true },
    { id: 5, name: 'Watch series', completed: false },
    { id: 6, name: 'Go to the snow for a day', completed: false }
  ];

  return (
    <>
      <TaskList task={task} />
    </>
  )
}

export default App
