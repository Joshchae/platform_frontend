import React, { useState } from "react";
import ReactCardFlip from 'react-card-flip';
import './Cards.css';

const CardStyle = {
    border: "1px solid black",
    padding: "20px",
    margin: "20px",
    width: "200px",
    height: "300px"
  };
  
  
  const StoryCards = ({ fact }) => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        setIsFlipped(!isFlipped);        
      }
  
    return (
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div
          style={CardStyle}
          // onMouseEnter={handleClick} 
          className="CardFront"
        >
          <div>
            This is the front of the card
            <h3>{fact.title}</h3>
            <img width="200" src={fact.gif} alt="" />
          </div>
          <button onClick={handleClick}>Click to read more</button>
        </div>
        <div
          style={CardStyle}
          onMouseLeave={handleClick}
          className="CardBack"
        >
         <div>
            This is the back of the card
            <h5>{fact.text}</h5>
          </div>
          {/* <button onClick={handleClick}>Click to flip back</button> */}
        </div>
      </ReactCardFlip>
    );
  };
  
  export default StoryCards;
  