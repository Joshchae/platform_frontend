import React, { useState } from "react";
// import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'react-bootstrap/Card';
// import { Button, ButtonGroup } from 'react-bootstrap/Button'; 
import ReactCardFlip from 'react-card-flip';
import './AnimatedCards.css';


function AnimatedFactCards () {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleClick = () => {
        setIsFlipped(!isFlipped);
    }
    return (
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div className='cardstyle-front'>
            <div img src='img.jpg' alt=''>
            What is climate-induced migration?</div> 
            <button onClick={handleClick}>Click to flip</button>
        </div>

        <div className='cardstyle-back'>
          This is the back of the card.
          <button onClick={handleClick}>Click to flip</button>
        </div>
      </ReactCardFlip>
    )
}

export default AnimatedFactCards;