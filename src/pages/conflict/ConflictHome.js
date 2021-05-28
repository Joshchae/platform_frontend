import React, { useState } from 'react';
// import ReactMapGL from 'react-map-gl';
import { schemeYlOrRd, scaleSequential, max} from 'd3';
import { useWorldAtlas } from './useWorldAtlas';
import { Marks } from './Marks'
import './Conflict.css'
import { useData } from './useData';


const width = 960;
const height = 500;
const selectedDate = 2017;
const ConflictHome = () => {
    const worldAtlas = useWorldAtlas();
    const {data} = useData();

    if (!worldAtlas || !data) {
        <pre>Loading...</pre>;
    }
    console.log(data)
    const filteredData = data.filter(d => d.date_end === selectedDate);
    // console.log(filteredData);
    const colorValue = d => d.Result;

    const colorScale = scaleSequential(schemeYlOrRd).domain([0, max(data, colorValue)])


    return (
        <>
        <svg width={width} height={height}>
            <Marks //coords insert
              worldAtlas={worldAtlas}
              data={data}
              colorScale={colorScale}
              colorValue={colorValue}
            />
        </svg>
       
        </>
    );
};


// function ConflictHome() {
//     const [viewport, setViewport] = useState({
//         latitude: 37.7577,
//         longitude: -122.4376,
//         width: '100vw',
//         height: '100vh',
//         zoom: 8
//     })
//     return (
//         <div>
//             Landing page for Conflict<br />
//             Map<br />
//             Filter<br />

//             <ReactMapGL
//             {...viewport}
//             mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
//             onViewportChange={(viewport) => setViewport(viewport)} />
//         </div>
//     )
// }


export default ConflictHome;
