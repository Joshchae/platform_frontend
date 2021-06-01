import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import './ClimateMigration.css'
// import * as cityData from '../../custom.geo.json';
import * as parkData from '../../data/skateboard-parks.json';

function ClimateMigrationMap() {
    const [viewport, setViewport] = useState({
        latitude: 45.4211,
        longitude: -75.6903,
        width: '80vw',
        height: '80vh',
        zoom: 5
      });
     const [selectedPark, setSelectedPark] = useState(null);
     const [selectedLocation, setSelectedLocation] = useState(null);
    
     /* fetch Data from MongoDB, localhost*/
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

    const [locationData, setLocationData] = useState([]);
  
    useEffect(() => {
        fetch('http://localhost:5000/locations/')
        .then(res => res.json())
        .then((json) => {
          setLocationData(json.data);
          console.log(json.data)
        })
        .catch(console.log('request failed, useApi'));
      }, [])

      return (
        <div>
            <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            mapStyle='mapbox://styles/zuzuc/ckp5g7i5g04yy17l8viaxmxgi'
            onViewportChange={(viewport) => setViewport(viewport)}>
        
            {locationData.map((loc) => (
              <Marker key={loc.id} longitude={loc.longitude} latitude={loc.latitude} >
                <div>
                  <button className="marker-btn" onClick={e => {e.preventDefault(); setSelectedLocation(loc)}}>
                    <img src="../../data/globe.png" width="10" alt="Location Icon" />
                  </button>
                </div>
              </Marker>
            ))}

            {/*
            {selectedLocation ? (
              <Popup
                latitude={loc.latitude}
                longitude={loc.longitude} 
                onClose={() => {
                  setSelectedLocation(null);
               }}>
                <div>
                  <h2>{selectedLocation.properties?.NAME}</h2>
                  <p>{selectedLocation.properties?.DESCRIPTIO}</p>
                </div>
              </Popup>
            ) : null} */}

            </ReactMapGL>
        </div>
      );
}

export default ClimateMigrationMap
