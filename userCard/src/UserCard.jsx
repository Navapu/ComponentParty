import './App.css'
 
 function UserCard({ name, age, job }) {
     return (
     <div className="userCard">
       <h2>{name}</h2>
       {age !== undefined && <h2>{age}</h2>}
       <h2>{job || "Jobless"}</h2>
     </div>
   )
 }
 
 export default UserCard