import React from 'react'
import Navbar from '../../components/Navbar'
import housings from '../../assets/logements.json'
import Footer from '../../components/Footer'


const Home = () => {
  return (
    <div>
        <header>
            <Navbar/>
            <div className='header-banner'>
              <h1>Chez vous,<br/> partout et ailleurs</h1>
            </div>
        </header>
        <main>
          <div className='container-housings'>
          {
            housings.map(housing => (
              <div key={housing.id}>
                {
                  housing.id
                }
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