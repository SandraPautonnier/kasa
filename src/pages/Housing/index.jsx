import React from 'react'
import Navbar from '../../components/Navbar'
import housings from '../../assets/logements.json'
import Footer from '../../components/Footer'

const Housing = () => {
    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className='housing-form'>
                    
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Housing