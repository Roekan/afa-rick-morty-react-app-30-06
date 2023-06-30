import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
        <div className='container-footer'>
            <div className="box-menu-footer">
                <a className='link-footer' href="/home">Register</a>
                <a className='link-footer' href="/home">Login</a>
            </div>
            <div className="box-menu-footer">
                <a className='link-footer' href="/home">Home</a>
                <a className='link-footer' href="/home">Personajes</a>
                <a className='link-footer' href="/home">Formulario</a>
            </div>
        </div>
    </>
  )
}

export default Footer