import './App.css'
import Task from './Task'
 const TaskList = ({ task }) => {
     return (
         <>
             {task.map(({id, name, completed}) => (
                <Task id={id} name={name} completed={completed} />
            ))}
         </>
     )
 }
 
 export default TaskList