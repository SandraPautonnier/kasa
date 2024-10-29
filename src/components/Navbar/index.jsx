import React from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <img src={Logo} alt="Kasa" />
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/">A Propos</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar