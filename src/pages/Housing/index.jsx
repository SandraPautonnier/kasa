import { Navigate, useParams } from 'react-router-dom';
import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import housings from '../../assets/logements.json';
import Footer from '../../components/Footer';
import Dropdown from '../../components/Dropdown';
import Rating from '../../components/Rating';
import Carousel from '../../components/Carousel';


const Housing = () => {
    const {id} = useParams();

    const housing = housings.find(item => item.id === id);

    if (!id || !housing){
        return <Navigate to="/404"/>

    }

    return (
        <div>
            <header>
                <Navbar/>
            </header>
            <main>
                    <div className='housing-form' >
                        <Carousel pictures={housing.pictures}/>
                        <div className='form'>
                            <div className='left-form'>
                                <h2>{`${housing.title}`}</h2>
                                <p>{`${housing.location}`}</p>
                                <ul className='tags'>
                                    {housing.tags.map((tag, index) => (
                                        <li className='tag' key={index}>{tag}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className='host-ratting'>
                                <Rating rating={`${housing.rating}`}></Rating>
                                <div className='host-member'>
                                    <p className='member-name'>{`${housing.host.name}`}</p>
                                    <img src={`${housing.host.picture}`} alt={`${housing.host.name}`} />
                                </div>
                            </div>
                        </div>
                        <div className='drop-down'>
                            <Dropdown content={housing.description} title={"Description"}/>
                            <Dropdown content={housing.equipments} title={"Équipements"}/>
                        </div>
                    </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Housing;