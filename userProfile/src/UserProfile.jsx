import './App.css'
const UserProfile = ({ data: { name, email, img, adress: { street, city, zipCode } } }) => {
    return (
        <div className="userProfile">
            <img src={img} className='bartImg'/>
            <h1>{name}</h1>
            <h2>{email}</h2>
            <div className="address">
                <p>{street},</p>
                <p>{city},</p>
                <p>{zipCode}</p>
            </div>
        </div>
    )
}
export default UserProfile