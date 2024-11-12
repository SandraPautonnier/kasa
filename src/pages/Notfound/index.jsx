import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div>
        <header>
            <Navbar />
        </header>
        <main>
            <div className='container-notfound'>
                <h2 className='title-404'>404</h2>
                <p className='p-404'>Oups! La page que vous demandez n'existe pas.</p>
                <Link to="/" className='link-home'>Retourner sur la page d'accueil</Link>
            </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Notfound