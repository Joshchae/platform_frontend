// import React, { useState } from 'react'
// import './ClimateMigration.css'
// import './Box.css'
// import AnimatedFactCards from '../../components/cards/FactCard'
// import { Card } from 'react-bootstrap';
// import ReactCardFlip from 'react-card-flip';
// // import FactData from '../../components/cards/FactData.json';

// function ClimateMigrationFacts() {
//     // const postCards = AnimatedFactCards()
//     // const [selectedCard, setSelectedCard] = useState(null);
//     const cardInfo = [
//         {image: '', title:'A', text: ''},
//         {image: '', title:'B', text: ''},
//         {image: '', title:'C', text: ''},
//         {image: '', title:'D', text: ''},
//         {image: '', title:'E', text: ''},
//         {image: '', title:'F', text: ''},
//         {image: '', title:'G', text: ''},
//         {image: '', title:'H', text: ''},
//         {image: '', title:'I', text: ''},
//     ];
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleClick = () => {
//         setIsFlipped(!isFlipped);
//     }

//     const renderCard = (card, index) => {
//         return(
//             <div className='CardInfo'>
//             <Card key={index} className='box' style={{ width: '18rem' }} >
//             <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
//                 <Card.Body>
//                     <Card.Title>{card.title}</Card.Title>
//                     <Card.Text>{card.text}</Card.Text>
//                 </Card.Body>
//             </Card> 
//         </div>
//     );
//     ;}
    
//     return (
//         <div className='FactCardsList'>
//             <div className='grid'>
//             {cardInfo.map((renderCard) => {
//                 return(
//                     <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//                         <div className='cardstyle-front'>
//                         <div img src='img.jpg' alt=''>
//                             What is climate-induced migration?</div> 
//                         <button onClick={handleClick}>Click to flip</button>
//                         </div>
//                         <div className='cardstyle-back'>
//                         This is the back of the card.
//                         <button onClick={handleClick}>Click to flip</button>
//                         </div>
//                     </ReactCardFlip>
//                 )
//             })}
//             </div>
//         </div>
//     )
// };

// export default ClimateMigrationFacts;


// function FactCard () {
//     const [isFlipped, setIsFlipped] = useState(false);

//     const handleClick = () => {
//         setIsFlipped(!isFlipped);
//     }
//     return (
//        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//         <div className='cardstyle-front'>
//           <div img src='img.jpg' alt=''>
//             What is climate-induced migration?</div> 
//           <button onClick={handleClick}>Click to flip</button>
//         </div>
//         <div className='cardstyle-back'>
//           This is the back of the card.
//           <button onClick={handleClick}>Click to flip</button>
//         </div>
//       </ReactCardFlip>
   
//     )
// }



// const FactCard = ({ facts }) => {
//     const cardInfo = [
//         {image: '', title:'A', text: ''},
//         {image: '', title:'B', text: ''},
//         {image: '', title:'C', text: ''},
//         {image: '', title:'D', text: ''},
//         {image: '', title:'E', text: ''},
//         {image: '', title:'F', text: ''},
//         {image: '', title:'G', text: ''},
//         {image: '', title:'H', text: ''},
//         {image: '', title:'I', text: ''},
//         ]
      
//     const [isFlipped, setIsFlipped] = useState(false);
 
//     const handleClick = (e) => {
//         e.preventDefault();
//         setIsFlipped(!isFlipped);        
//     }

//     // const renderCard = (card, index) => {
//         return (
//             <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//              <div onMouseEnter={handleClick} className='cardstyle-front'>
//                <div img src='img.jpg' alt=''>
//                  What is climate-induced migration?</div> 
//                {/* <button onClick={handleClick}>Click to flip</button> */}
//              </div>
//              <div onMouseLeave={handleClick} className='cardstyle-back'>
//                This is the back of the card.
//                {/* <button onClick={handleClick}>Click to flip</button> */}
//              </div>
//            </ReactCardFlip>
//          );
//  }

//  const ClimateMigrationFacts = () => {
//     return (
//         <div className='FactCardsList'>
//             <div className='grid'>
//             {cardInfo.map((card, index) => (
//                 <Card facts={card} key={`card-${index}`} />
//             ))} 
//             </div>
//         </div>
//     );
//  };


// export default ClimateMigrationFacts;


// function ClimateMigrationFacts() {
//   const cardInfo = [
//       {image: '', title:'A', text: ''},
//       {image: '', title:'B', text: ''},
//       {image: '', title:'C', text: ''},
//       {image: '', title:'D', text: ''},
//       {image: '', title:'E', text: ''},
//       {image: '', title:'F', text: ''},
//       {image: '', title:'G', text: ''},
//       {image: '', title:'H', text: ''},
//       {image: '', title:'I', text: ''},
//       ]
    
//   const [isFlipped, setIsFlipped] = useState(false);

//   const handleClick = (e) => {
//       e.preventDefault();
//       setIsFlipped(!isFlipped);        
//   }

//   const renderCard = (card, index) => {
//       return (
//           <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//            <div onMouseEnter={handleClick} className='cardstyle-front'>
//              <div img src='img.jpg' alt=''>
//                What is climate-induced migration?</div> 
//              {/* <button onClick={handleClick}>Click to flip</button> */}
//            </div>
//            <div onMouseLeave={handleClick} className='cardstyle-back'>
//              This is the back of the card.
//              {/* <button onClick={handleClick}>Click to flip</button> */}
//            </div>
//          </ReactCardFlip>
//        );
// }
//       return (
//           <div className='FactCardsList'>
//               <div className='grid'>
//               {cardInfo.map(renderCard)} 
//               </div>
//           </div>
//       )

// }

// export default ClimateMigrationFacts;

//         <div className='CardInfo'>
  //         <Card key={index} className='box' style={{ width: '18rem' }} >
  //         <Card.Img variant="top" src="holder.js/100px180" src={card.image} />
  //             <Card.Body>
  //                 <Card.Title>{card.title}</Card.Title>
  //                 <Card.Text>{card.text}</Card.Text>
  //             </Card.Body>
  //         </Card> 
  //     </div>
  // );
  // ;}


  // return(    
//   <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
//    <FrontFact key='front' onMouseEnter={handleClick} className='cardstyle-front'>
//      <div img src='img.jpg' alt=''>
//        What is climate-induced migration?</div> 
//      {/* <button onClick={handleClick}>Click to flip</button> */}
//    </FrontFact>
//    <BackFact key='back' onMouseLeave={handleClick} className='cardstyle-back'>
//      This is the back of the card.
//      {/* <button onClick={handleClick}>Click to flip</button> */}
//    </BackFact>
//  </ReactCardFlip>
// )
