import React from 'react'
import aboutlists from '../../assets/aboutList.json';
import Dropdown from '../../components/Dropdown'
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import Background2 from '../../assets/images/background-2.png';

const About = () => {

  return (
    <div>
        <header>
            <Navbar/>
            <div className='header-banner' style={{background: `linear-gradient(to bottom, rgba(0,0,0, 0.5), rgba(0,0,0, 0.5)), url(${Background2}) no-repeat center/cover`}}></div>
        </header>
        <main>
          <div className='container-about-list'>
            {
              aboutlists.map(aboutlist =>
                <Dropdown content={aboutlist.content} title={aboutlist.title}/>
              )
            }
          </div>
        </main>
        <Footer />
    </div>
  )
}

export default About