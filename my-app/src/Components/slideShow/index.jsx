import React from 'react';
import { Fade } from 'react-slideshow-image';
import './style.css';
import Caraiman from "./images/caraiman.jpg";
import Turda from "./images/turda.jpg";
import Mamaia from "./images/mamaia.jpg";
 
const fadeImages = [
  Caraiman,
  Turda,
  Mamaia
];
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  // indicators: true,
}
export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade {...fadeProperties}>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} />
          </div>
          <h2>Caraiman</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} />
          </div>
          <h2>Salina Turda</h2>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} />
          </div>
          <h2>Mamaia</h2>
        </div>
      </Fade>
    </div>
  )
}