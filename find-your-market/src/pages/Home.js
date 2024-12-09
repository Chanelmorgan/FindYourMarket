import React, { useState } from 'react';
import '../styles/index.css'; 
import '../styles/Home.css';  
import chartImage1 from '../assets/images/todayChart.png';
import chartImage2 from '../assets/images/monthChart.png'; 
import heatImage from '../assets/images/newHeat.png'; 
import video from '../assets/images/high_flashing.mp4'; 
import Popup from '../components/Popup.js';

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

function Home() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [showQuestionMark, setShowQuestionMark] = useState(false);
    const [showOpeningTime, setShowOpeningTime] = useState(false);

    const handleNext = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const handlePrevious = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    const handleQuestionMarkClick = () => {
        setShowQuestionMark(true);
    };

    const handleCloseQuestionMark = () => {
        setShowQuestionMark(false);
    };
    
    const handleOpeningTimeClick = () => {
        setShowOpeningTime(true);
    };

    const handleCloseOpeningTime = () => {
        setShowOpeningTime(false);
    };

    return (
        <div className="home-container">
            <h2 className="home-title">Hello, Tara!</h2>
            <h3 className="pref-market">Norwich Market</h3>
            
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
                <img src={images[currentImageIndex]} alt="Market Charts" className="slideshow-image" />
                
                <div className="arrow-left" onClick={handlePrevious}>
                    &lt;
                </div>
                <div className="arrow-right" onClick={handleNext}>
                    &gt;
                </div>
                <button
                    type="button"
                    className="chart-explain-btn"
                    onClick={handleQuestionMarkClick}
                >
                    ?
                </button>
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
                            <a onClick={handleOpeningTimeClick} className="opening-time">{stall.openingTime}</a>
                        </div>
                    ))}
                </div>
            </div>

        
            <Popup
                show={showQuestionMark}
                onClose={handleCloseQuestionMark}
                title="Chart"
                message="Chart explained in detail"
                buttonText="Okay"
                onConfirm={handleCloseQuestionMark}
                isError={false}
            />

            <Popup
                show={showOpeningTime}
                onClose={handleCloseOpeningTime}
                title="Stall Closed"
                message="Recommend another stall/market"
                buttonText="Okay"
                onConfirm={handleCloseOpeningTime}
                isError={false}
            />
        </div>
    );
}

export default Home;