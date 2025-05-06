const FormEditUser = ({ name, age, job }) => {
    return (
        <form action="">
            <span>Name: </span><input type="text" placeholder={name} />
            <span>Age: </span><input type="text" placeholder={age} />
            <span>Job: </span><input type="text" placeholder={job} />
            <button type='Submit'>Modify</button>
        </form>
    )
}
export default FormEditUser