import React, { useState } from 'react';
import '../styles/index.css'; 
import '../styles/Home.css';  
import chartImage1 from '../assets/images/todayChart.png';
import chartImage2 from '../assets/images/monthChart.png'; 
import heatImage from '../assets/images/newHeat.png'; 
import video from '../assets/images/high_flashing.mp4'; 

const images = [
    chartImage1,
    chartImage2,
    heatImage
];

const stallsData = [
    { name: 'Stall 1', openingTime: '8:00 AM - 6:00 PM' },
    { name: 'Stall 2 ', openingTime: '9:00 AM - 5:00 PM' },
    { name: 'Stall 3', openingTime: '7:00 AM - 4:00 PM' },
    { name: 'Stall 4', openingTime: '8:00 AM - 7:00 PM' },
];

function Market() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

   
    const handlePrevious = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="home-container">
            <h3 className="example-market">Example Market</h3>
     <div className="curved-box">
  <div className="content-container">
    <span className="crowd-level-title">Live Crowd Level</span>
    <video
        className="video"
        src={video}
        type="video/mp4"
        loop
        muted
        autoPlay
        playsInline
      />
  </div>
</div>
            <div className="slideshow-container">
                <img src={images[currentImageIndex]} alt="Market" className="slideshow-image" />
                
          
                <div className="arrow-left" onClick={handlePrevious}>
                    &lt; 
                </div>
                <div className="arrow-right" onClick={handleNext}>
                    &gt; 
                </div>
            </div>

        <div className="stall-container">
            <div className="titles">
                <div className="home-stall-title">Stall</div>
                <div className="home-OT-title">Opening Time</div>
            </div>

            <div className="stall-list">
                {stallsData.map((stall, index) => (
                    <div key={index} className="stall-item">
                        <a href="/Stall" className="stall-name">{stall.name}</a>
                        <a href="/Stall" className="opening-time">{stall.openingTime}</a>
                    </div>
                ))}
            </div>
        </div>
    
        </div>
    );
}

export default Market;
