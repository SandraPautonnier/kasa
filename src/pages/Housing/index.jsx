import { Navigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import housings from '../../assets/logements.json';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';



const Housing = () => {
    const {id} = useParams();

    const housing = housings.find(item => item.id === id);

    if (!id || !housing){
        return <Navigate to="/"/>

    }

    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                <div className='housing-form' >
                    <img className='header-img' src={`${housing.cover}`} alt={`${housing.description}`}/>
                    <h2>{`${housing.title}`}</h2>
                    <p>{`${housing.location}`}</p>
                        <ul>
                            {housings.map(housing => (
                                <li key={housing.tags}>{tags}</li>
                            ))
                            }
                            
                        </ul>
                    <div className='host-member'>
                        <div>{`${housing.host.name}`}</div>
                        <img src={`${housing.host.picture}`} alt={`${housing.host.name}`} />
                    </div>
                    <span>{`${housing.rating}`}</span>
                    <div>
                        <Dropdown content={housing.description} title={"Description"}/>
                        <Dropdown content={housing.equipments} title={"Equipements"}/>
                    </div>
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