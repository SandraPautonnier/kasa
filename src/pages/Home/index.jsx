import { Link } from 'react-router-dom';
import React from 'react'
import Navbar from '../../components/Navbar'
import housings from '../../assets/logements.json'
import Footer from '../../components/Footer'
import Background from '../../assets/images/background.png'

const Home = () => {
  return (
    <div>
        <header>
            <Navbar/>
            <div className='header-banner' style={{background: `linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(${Background}) no-repeat center/cover`}}>
              <h1>Chez vous, partout et ailleurs</h1>
            </div>
        </header>
        <main>
          <div className='container-housings'>
          {
            housings.map(housing => (
              <div className='card-housing' key={housing.id}>
                <Link to={`/housing/${housing.id}`}> 
                <img src={`${housing.cover}`} alt={`${housing.description}`} />
                <p>{housing.title}</p>
                </Link>
                
              </div>
            ))
          }
          </div>
        </main>
        <Footer/>
    </div>
  )
}

export default Home