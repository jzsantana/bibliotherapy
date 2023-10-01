import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <nav className='navbar'>
        <h1>BIBLIOTHERAPY </h1>

        <div className="navbar-list">
            <a href="">Produtos</a>
            <a href="">Sobre</a>
            <a href="">Contatos</a>
        </div>
    </nav>
  )
}

export default Header