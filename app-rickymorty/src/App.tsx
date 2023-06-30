import Header from './commons/header/Header'
import Footer from './commons/footer/Footer'

import Home from './pages/home/Home'
import Register from './pages/register/Register'
import Login from './pages/login/Login'
import Characters from './pages/characters/Characters'
import Details from './pages/details/Details'
import Form from './pages/form/Form'

import {Routes,Route} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <>
      <Header/>
        <Routes>
          <Route path='*' element=<h1>404 Not found'</h1> />
          <Route path='/' element={<Home />} />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/characters' element={<Characters />} />
          <Route path='/details' element={<Details />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
