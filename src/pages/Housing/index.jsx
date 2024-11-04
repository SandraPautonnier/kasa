import { useParams } from 'react-router-dom';
import React from 'react';
import Navbar from '../../components/Navbar';
import housings from '../../assets/logements.json';
import Footer from '../../components/Footer';



const Housing = () => {
    const {id} = useParams();

    const House = housings.find((House) => House.id === parseInt(id, 10));

    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className='housing-form' >
                    
                    <p>ID du logement : {House.id}</p>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

/*const Housing = () => {
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
}*/

export default Housing;