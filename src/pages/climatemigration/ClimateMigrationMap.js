import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './ClimateMigration.css'
// import * as cityData from '../../custom.geo.json';
import * as parkData from '../../data/skateboard-parks.json';
// import {SkateboardLogo} from './skateboarding.svg';

function ClimateMigrationMap() {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: '100vw',
        height: '100vh',
        zoom: 5
      });
     const [selectedPark, setSelectedPark] = useState(null);
    
     useEffect(() => {
      const listener = e => {
        if (e.key === 'Escape') {
          setSelectedPark(null);
        }
      };
      window.addEventListener('keydown', listener);

      return () => {
        window.removeEventListener('keydown', listener);
      };
    }, []);

      return (
        <div>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/zuzuc/ckp5g7i5g04yy17l8viaxmxgi'
            onViewportChange={(viewport) => setViewport(viewport)}>
        
            {parkData.features.map((park)=> (
              <Marker key={park.properties.PARK_ID}
                latitude={park.geometry.coordinates[1]}
                longitude={park.geometry.coordinates[0]} >
                <div>
                  <button className="marker-btn"
                    onClick={e => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}>
                    <img src="../../data/globe.png" width="10" alt="Skate Park Icon" />
                  </button>
                </div>
              </Marker>
            ))}
            
            {selectedPark ? (
              <Popup
                latitude={selectedPark.geometry.coordinates[1]}
                longitude={selectedPark.geometry.coordinates[0]} 
                onClose={() => {
                  setSelectedPark(null);
               }}>
                <div>
                  <h2>{selectedPark.properties?.NAME}</h2>
                  <p>{selectedPark.properties?.DESCRIPTIO}</p>
                </div>
              </Popup>
            ) : null}

            </ReactMapGL>
        </div>
      );
}

export default ClimateMigrationMap
