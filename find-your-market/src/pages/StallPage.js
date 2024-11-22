import React from 'react';
import '../styles/Stall.css'; 
function Stall() {
    const items = [
        { name: 'Apples', amount: 10 },
        { name: 'Oranges', amount: 15 },
        { name: 'Bananas', amount: 12 },
        { name: 'Grapes', amount: 8 },
        { name: 'Cherries', amount: 20 },
        { name: 'Strawberries', amount: 25 },
        { name: 'Pineapples', amount: 5 },
        { name: 'Mangoes', amount: 14 },
        { name: 'Watermelons', amount: 6 },
        { name: 'Blueberries', amount: 30 },
      ]; 
    
      return (
        <div className="container">
          <h1 className="title">Example Market</h1>
          <h2 className="sub-heading">Location: Norwich City Centre</h2>
          <div className="scroll-container">
            {items.map((item, index) => (
              <div key={index} className="item">
                <span className="item-name">{item.name}</span>
                <span className="item-amount">{item.amount}</span>
              </div>
            ))}
          </div>
        </div>
      );
    };
    

export default Stall;