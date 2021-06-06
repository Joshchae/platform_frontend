import React, { useState, useEffect } from 'react'
import './ClimateMigration.css'
import FactCards from '../../components/cards/FactCards.js';
import './../../components/cards/Cards.css';


const factData = [
  {
    "image": "picture",
    "title": "What is climate-induced migration?",
    "text": "fact1"
  },
  {
    "image": "picture",
    "title": "question2",
    "text": "fact2"
  },
  {
    "image": "picture",
    "title": "question3",
    "text": "fact3"
  },
  {
    "image": "picture",
    "title": "question4",
    "text": "fact4"
  }
]

function ClimateMigrationFacts() {
  
// const [factData, setFactData] = useState([]);  
//   useEffect(() => {
//     fetch(`./factdata.json`) 
//       .then((response) => response.json())
//       .then((json) => {

//        setFactData(json.data); 
//        console.log(json);
//      })
//      .catch ((error) => console.log ("Well at least we tried"));
//   }, []);

    return (
      <div className='grid' style={{ margin: "auto", width: "50%" }} >
        {factData.map((item, index) => (
          <FactCards fact={item} key={`card-${index}`} />
        ))}
      </div>
    );
  };
  
export default ClimateMigrationFacts;
