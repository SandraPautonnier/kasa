import React, { useEffect, useState } from 'react'
import Logo from '../../assets/images/Logo.svg'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();
  const [activeUrl, setActiveUrl] = useState('');

  useEffect(() => {
    setActiveUrl(location.pathname); // Met à jour l'URL active
  }, [location]);

  return (
    <nav>
      <img src={Logo} alt="Kasa" />
      <ul>
        <li><Link to="/" className={activeUrl === '/' ? 'active' : ''}>Accueil</Link></li>
        <li><Link to="/about" className={activeUrl === '/about' ? 'active' : ''}>A Propos</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar