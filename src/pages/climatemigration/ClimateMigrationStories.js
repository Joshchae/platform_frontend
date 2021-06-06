import React from 'react'
import './ClimateMigration.css'
import StoryCards from '../../components/cards/StoryCards.js';
import './../../components/cards/Cards.css';
// import storydata from './../../storydata.json';

const storyData = [
    {
      "image": "picture",
      "title": "titel1",
      "text": "story1"
    },
    {
      "image": "picture",
      "title": "title2",
      "text": "story2"
    },
    {
      "image": "picture",
      "title": "title3",
      "text": "story2"
    },
    {
      "image": "picture",
      "title": "title4",
      "text": "story2"
    }
  ]

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