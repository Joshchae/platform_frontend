import React, { useState } from 'react'
import ReactTooltip from 'react-tooltip';
// import {fetchConflicts} from 'useData'
import MapChart from './MapChart'

function ConflictHome2() {
    
    const [content, setContent] = useState("");

    return (
      <div>
        <MapChart setTooltipContent={setContent} />
        <ReactTooltip>{content}</ReactTooltip>
      </div>
    );
}

export default ConflictHome2
