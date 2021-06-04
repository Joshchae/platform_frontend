import React, { useState } from 'react'
import ClimateMigrationMap from './ClimateMigrationMap'
import ClimateMigrationFact from './ClimateMigrationFacts'
import ClimateMigrationSubmit from './ClimateMigrationSubmit'
import ClimateMigrationStory from './ClimateMigrationStory'
import './ClimateMigration.css'

function ClimateMigrationHome() {
    const [renderMap, setRenderMap] = useState(false)
    const [renderBgi, setRenderBgi] = useState(false)
    const [renderSubmit, setRenderSubmit] = useState(false)
    const [renderStory, setRenderStory] = useState(false)

    const toggleMap = () => { setRenderMap(!renderMap) }
    const toggleBgi = () => { setRenderBgi(!renderBgi) }
    const toggleSubmit = (e) => { 
        e.preventDefault();
        setRenderSubmit(!renderSubmit)
        setRenderStory(!renderStory) }
    
    return (
        <div>
            <button onClick={toggleBgi}>Background information</button>
            <button onClick={toggleMap}>Stories around</button>
            {renderMap ?
                <>
                  <button onClick={toggleSubmit}>Submit your story</button>
                  <ClimateMigrationMap />
                  {renderStory ? '' : <ClimateMigrationStory />}
                </>
             : ''}
            {renderBgi ? <ClimateMigrationFact /> : ''}
            {renderSubmit ? <ClimateMigrationSubmit toggleSubmit={toggleSubmit}/> : ''}
        </div>
    )
}

export default ClimateMigrationHome;
