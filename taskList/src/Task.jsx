const Task = ({ id, name, completed }) => {
    return (
        <div className="taskList">
            <h2>{id}</h2>
            <h2>{name}</h2>
            <h2>{completed ? 'Completed' : 'Pending'}</h2>
        </div>
    )
}
export default Task