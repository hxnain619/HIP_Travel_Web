import React from 'react';
import { Zoom } from 'react-slideshow-image';
 
const zoomOutProperties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    scale: 0.4,
    arrows: true
  }

export const Slideshow = (images) => {
    return (
      <div className="slide-container" style={{padding: 20}}>
        <Zoom {...zoomOutProperties}>
          {
            images.map((each, index) => {
            return <img key={index} style={{width: "100%", height: '100%'}} src={process.env.PUBLIC_URL + "/images/" + String(each)} />
            })
          }
        </Zoom>
      </div>
    )
}