import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'

function App() {
  return (
    <body>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/tickets" element={<Tickets/>} />
      </Routes>
      <Footer/>
    </body>
  )
}

export default App
