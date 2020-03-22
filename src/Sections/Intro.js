import React from 'react';
import './Intro.css';
import Button from '../Components/Button';
import Man from '../assets/Image 1.png';

function Intro() {
  return (
    <section className="intro">
        <div className="intro-col-1">
          <p className='creative'>creative</p>
          <p className="logo-group"><span className='logo'>agency</span><span className='x'>x</span></p>
          
          <div className="intro-text">
            <h1 className="c-agency">creative agency</h1>
            <p className="intro-text-play">OOOO &nbsp; watch a video intro</p>
          </div>

          <div className="spacer"></div>
          
        </div>

        <div className='intro-col-2'>
          <img className='intro-img' src={Man} alt='man' width="700px" height="911px"/>
          <nav>
            <ul>
              <li>Home</li>
              <li>Project</li>
              <li>Services</li>
              <li>About us</li>
              <li>Contact</li>
              <li><Button content='MY PROJECT'/></li>
            </ul>
          </nav>
        </div>    
    </section>
  );
}

export default Intro;
