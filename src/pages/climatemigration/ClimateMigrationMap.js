import React, { useState, useEffect } from 'react'
import ReactMapGL, { Marker, Popup, NavigationControl } from 'react-map-gl';
import './ClimateMigration.css';

const navControlStyle={
  right: 10,
  top: 10
};

function ClimateMigrationMap() {
    const [viewport, setViewport] = useState({
        longitude: -122.45, 
        latitude: 37.78,
        width: '100vw',
        height: '100vh',
        zoom: 1.5
      });

     const [postData, setPostData] = useState([]);
     const [selectedPost, setSelectedPost] = useState(null);
    
     /* fetch Data from MongoDB, localhost*/
     useEffect(() => {
      const listener = e => {
        if (e.key === 'Escape') {
          setSelectedPost(null);
        }
      };
      window.addEventListener('keydown', listener);

      return () => {
        window.removeEventListener('keydown', listener);
      };
    }, []);

  
    useEffect(() => {
        fetch('http://localhost:5000/posts/')
        .then(res => res.json())
        .then((json) => {
          setPostData(json.data);
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
            <NavigationControl style={navControlStyle} />
        
            {postData.map((post) => (
              <Marker key={post.id} longitude={post.location.longitude} latitude={post.location.latitude} >
                <div>
                  <button className="marker-btn" onClick={e => {e.preventDefault(); setSelectedPost(post)}}>
                    <img src="../../data/globe.png" width="10" alt="You are here" />
                  </button>
                </div>
              </Marker>
            ))}

            {selectedPost ? (
              <Popup
                latitude={selectedPost.location.latitude}
                longitude={selectedPost.location.longitude} 
                onClose={() => {
                  setSelectedPost(null);
               }}>
                <div>
                  <h2>{selectedPost.title}</h2>
                  <h3>{selectedPost.region}</h3>
                  <h4>{selectedPost.country}</h4>
                  <h5>{selectedPost.locationName}</h5>
                  <p>{selectedPost.story}</p>
                  <img src={selectedPost.image} width="50"alt={selectedPost.title} />
                </div>
              </Popup>
            ) : null}

            </ReactMapGL>
        </div>
      );
}

export default ClimateMigrationMap
