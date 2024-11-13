import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import aboutlist from '../../assets/aboutList.json';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Background2 from '../../assets/images/background-2.png';

const About = ({ title, content }) => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
        <header>
            <Navbar/>
            <div className='header-banner' style={{background: `linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(${Background2}) no-repeat center/cover`}}></div>
        </header>
        <main>
          <div className='container-about-list'>
          <Dropdown content={aboutlist.content} title={aboutlist.title}/>
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default About