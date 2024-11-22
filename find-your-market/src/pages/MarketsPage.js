import React from "react";
import "../styles/Markets.css";
import { Link } from "react-router-dom";

const Markets = () => {
  const markets = [
    { id: 1, name: "Market 1", logo: "https://banner2.cleanpng.com/20180403/aww/avhnjhtse.webp", link: "/Market" },
    { id: 2, name: "Market 2", logo: "https://banner2.cleanpng.com/20180403/aww/avhnjhtse.webp", link: "/Market" },
    { id: 3, name: "Market 3", logo: "https://banner2.cleanpng.com/20180403/aww/avhnjhtse.webp", link: "/Market" },
    { id: 4, name: "Market 4", logo: "https://banner2.cleanpng.com/20180403/aww/avhnjhtse.webp", link: "/Market" },
  ];

  const mapURL = `https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12201.761091040038!2d1.2958384067885549!3d52.630169007188684!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d9e3e6d16bcae9%3A0x4dbfb1c1acd050a6!2sNorwich%20Market!5e0!3m2!1sen!2suk!4v1731665543326!5m2!1sen!2suk`;

  return (
    <div className="markets-container">
      <header className="markets-header">
        <h1 className="markets-title">Markets</h1>
        <button className="search-button">🔍</button>
      </header>

      <section className="markets-list">
        {markets.map((market) => (
          <div key={market.id} className="markets-item">
            <Link to={market.link} className="markets-link">
              <div className="button-container">
                <div className="logo-container">
                  <img src={market.logo} alt={market.name} className="markets-logo" />
                </div>
                <div className="name-container">
                  <span className="markets-name">{market.name}</span>
                </div>
                <div className="click-circle">
                  <span className="circle-text">Click here</span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </section>

      <section className="markets-map">
        <iframe
          title="Market Locations"
          src={mapURL}
          loading="lazy"
          allowFullScreen
        ></iframe>
      </section>
    </div>
  );
};

export default Markets;