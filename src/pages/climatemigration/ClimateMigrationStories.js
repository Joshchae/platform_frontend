import React from 'react'
import './ClimateMigration.css'
import StoryCards from '../../components/cards/StoryCards.js';
import './../../components/cards/Cards.css';
import storyData from './storyData.json';


function ClimateMigrationStories() {
    return (
        <div className='grid' style={{ margin: "auto", width: "50%" }} >
            {storyData.map((item, index) => (
        <StoryCards fact={item} key={`card-${index}`} />
      ))}
        </div>
    )
}

export default ClimateMigrationStories