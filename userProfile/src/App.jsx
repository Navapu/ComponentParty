import './App.css'
import UserProfile from './UserProfile';
function App() {
  const userData = {
    name: 'El Barto',
    email: 'elbarto@fox.com',
    img: "https://i.ebayimg.com/images/g/Z9oAAOSwH7NlKK4J/s-l1200.jpg;",
    adress: {
      street: 'Fake street 123',
      city: 'Springfield',
      zipCode: '12345'
    }
  };
  return (
    <>
      <UserProfile data={userData} />
    </>
  )
}

export default App
