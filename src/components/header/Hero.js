import React, { Component } from 'react';
import './Hero.scss'
import  heroImage from '../../images/hero/Hero.png';

class Hero extends Component {
  render() {

    return (
      <div id="header">
        {/* <div id="hero">
          <h1>
            Get the best remedy and Ultimate cure from Sicknesses and diseases with Natural Herbal Medicines
          </h1>
          <h1>
            Get the best remedy and Ultimate cure from Sicknesses and diseases with Natural Herbal Medicines
          </h1>
        </div> */}
        <div className="hero">
          <img className='hero-image' src={heroImage} />
        </div>
      </div>
    );
  }
}

export default Hero;
