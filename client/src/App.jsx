import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import About from './pages/About'
import Investors from './pages/Investors'
import Media from './pages/Media'
import Offers from './pages/Offers'
import Contact from './pages/Contact'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/investors' element={ <Investors /> } />
        <Route path='/media' element={ <Media /> } />
        <Route path='/offer' element={ <Offers /> } />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  )
}

export default App
