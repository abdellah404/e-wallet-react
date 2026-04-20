import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Header from './header'
import Footer from './footer'
import Index from './Index'
import Login from './login'
import Dashboard from './dashboard'
import './App.css'
import '@fortawesome/fontawesome-free/css/all.min.css';




function App() {
  const [isLoggedin, setIsLoggedIn] = useState(false);

  return (
    <>
      
      {isLoggedin ? <Dashboard/> : <Login setIsLoggedIn= {()=> setIsLoggedIn }/> }
    

    </>
  )
}

export default App
