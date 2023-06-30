import React from 'react'
import './Header.css'
const Header = () => {
  return (
    <>
    <div className='container-header'>
        <div className="box-logo">
            <img className='logo-header' src="./../../public/images/logo-project.png" alt="" />         
        </div>
        <div className="box-menu">
        <a className='link-header' href="/home">Register</a>
        <a className='link-header' href="/home">Login</a>
        <a className='link-header' href="/home">Home</a>
        <a className='link-header' href="/home">Personajes</a>
        <a className='link-header' href="/home">Formulario</a>
        </div>
    </div>
    </>
  )
}

export default Header