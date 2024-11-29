import React, { useState } from 'react';
import '../styles/index.css'; 
import '../styles/Home.css';  
import chartImage1 from '../assets/images/todayChart.png';
import chartImage2 from '../assets/images/monthChart.png';
import crowdLevelImage from '../assets/images/high.png';  
import heatImage from '../assets/images/heat.png'; 

// Example images for slideshow
const images = [
    chartImage1,
    chartImage2,
    heatImage
];

const stallsData = [
    { name: 'Fresh Fruits', openingTime: '8:00 AM - 6:00 PM' },
    { name: 'Vegetable Stall', openingTime: '9:00 AM - 5:00 PM' },
    { name: 'Meat Stall', openingTime: '7:00 AM - 4:00 PM' },
    { name: 'Bakery', openingTime: '8:00 AM - 7:00 PM' },
];

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    // Handle the "Next" button click
    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // Handle the "Previous" button click
    const handlePrevious = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="home-container">
            <h2 className="home-title">Hello, Tara!</h2>
            <h3 className="pref-market">Norwich Market</h3>
            
            {/* Live Crowd Level Box with Image */}
            <div className="curved-box">
                <span>Live Crowd Level</span>
                <img 
                    src={crowdLevelImage} 
                    alt="Crowd Level" 
                    className="crowd-level-image" 
                />
            </div>

            {/* Slideshow */}
            <div className="slideshow-container">
                <img src={images[currentImageIndex]} alt="Market" className="slideshow-image" />
                
                {/* Navigation Arrows */}
                <div className="arrow-left" onClick={handlePrevious}>
                    &lt; {/* Left arrow */}
                </div>
                <div className="arrow-right" onClick={handleNext}>
                    &gt; {/* Right arrow */}
                </div>
            </div>

            {/* List of Stalls and Opening Times */}
            <div className="stall-list">
                {stallsData.map((stall, index) => (
                    <div key={index} className="stall-item">
                        <span className="stall-name">{stall.name}</span>
                        <span className="opening-time">{stall.openingTime}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;