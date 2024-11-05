import { Navigate, useParams } from 'react-router-dom';
import React from 'react';
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
                    <img src={`${housing.cover}`} alt={`${housing.description}`}/>
                    <h2>{`${housing.title}`}</h2>
                    <p>{`${housing.location}`}</p>
                    <div>{`${housing.tags}`}</div>
                    <div>{`${housing.host}`}</div>
                    <div>{`${housing.rating}`}</div>
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