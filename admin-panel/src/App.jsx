import { useContext } from 'react'
import './App.css'
import { MainContext } from './context/mainContext'
import { Login, User } from './pages';

function App() {
  const {user} = useContext(MainContext)

  console.log(user);
  return (user ? <User /> : <Login/> )
}

export default App
