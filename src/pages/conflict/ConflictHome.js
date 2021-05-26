import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';
import './Conflict.css'

function ConflictHome() {
    const [viewport, setViewport] = useState({
        latitude: 37.7577,
        longitude: -122.4376,
        width: '100vw',
        height: '100vh',
        zoom: 8
    })
    return (
        <div>
            Landing page for Conflict<br />
            Map<br />
            Filter<br />

            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            onViewportChange={(viewport) => setViewport(viewport)} />
        </div>
    )
}

export default ConflictHome;
