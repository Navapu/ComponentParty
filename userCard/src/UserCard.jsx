import './App.css'
import FormEditUser from './FormEditUser'
function UserCard({ id, name, age, job }) {
  if (id == 1) {
    return(
      <div className='userCard'>
        <FormEditUser id={id}name={name} age={age} job={job} />
      </div>
    )
  } else {
    return (
      <div className="userCard">
        <h2>{name}</h2>
        {age !== undefined && <h2>{age}</h2>}
        <h2>{job || "Jobless"}</h2>
      </div>
    )
  }

}

export default UserCard