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
                    <ul className='tags'>
                        {housing.tags.map((tag, index) => (
                            <li className='tag' key={index}>{tag}</li>
                        ))}
                    </ul>
                    <div className='host-ratting'>
                        <span>{`${housing.rating}`}</span>
                        <div className='host-member'>
                            <div className='member-nane'>{`${housing.host.name}`}</div>
                            <img src={`${housing.host.picture}`} alt={`${housing.host.name}`} />
                        </div>
                    </div>
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

export default Housing;