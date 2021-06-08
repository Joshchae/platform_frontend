import React, { useState, useEffect } from "react";
import ReactMapGL, { Marker, Popup, NavigationControl } from "react-map-gl";
import { Button, Modal } from "react-bootstrap";
import ClimateApi from "../../components/ClimateApi";
import { GiPositionMarker } from "react-icons/gi";
import "./ClimateMigration.css";
// import axios from 'axios'
// import {FaMapMarkerAlt} from 'react-icons/fa';
// import StoryModal from "../../components/StoryModal";

const navControlStyle = { right: 10, top: 10 };

function ClimateMigrationMap() {
  const [viewport, setViewport] = useState({
    longitude: 169.1264892,
    latitude: 17.9815443,
    width: "70vw",
    height: "70vh",
    zoom: 1.5,
  });
  const postData = ClimateApi();
  // const [postData, setPostData] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState(false);

  function handleShow(breakpoint) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPost(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div className="map">
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/zuzuc/ckpf84jbh0x1i17l9flyv6is6"
        // old: mapbox://styles/zuzuc/ckp5g7i5g04yy17l8viaxmxgi'
        onViewportChange={(viewport) => setViewport(viewport)}

      >
        <NavigationControl style={navControlStyle} />

        {postData.map((post) => (
          <Marker
            key={post._id}
            longitude={post.location.longitude}
            latitude={post.location.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <div>
              <button
                className="marker-btn"
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedPost(post);
                }}
              >
                <GiPositionMarker />
                Click here
              </button>
            </div>
          </Marker>
        ))}

        {selectedPost ? (
          <Popup
            latitude={selectedPost.location.latitude}
            longitude={selectedPost.location.longitude}
            closeButton={false}
            // closeOnClick={false}
            // onClose={() => {
            //   setSelectedPost(null);
            // }}
          >
            <div>
              <h2>{selectedPost.title}</h2>
              <h3>{selectedPost.region}</h3>
              <h4>{selectedPost.country}</h4>
              <h5>{selectedPost.locationName}</h5>
              <p>{selectedPost.story.substr(0, 25)}...</p>
              <Button className="me-2" onClick={handleShow}>
                Explore more
              </Button>
              <br />
              <img
                src={selectedPost.image}
                width="300"
                alt={selectedPost.title}
              />
            </div>
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedPost.title}</Modal.Title>
              </Modal.Header>
              <Modal.Body>{selectedPost.region}</Modal.Body>
            </Modal>
          </Popup>
        ) : null}

      </ReactMapGL>

      <div className="subtext">
        <p>
          The boundaries and the names shown and the designations used on this
          map do not imply official endorsement or acceptance by MapStories.
        </p>
      </div>
    </div>
  );
}

export default ClimateMigrationMap;

// fetching data
// useEffect(() => {
//     fetch('http://localhost:5000/posts/')
//     .then(res => res.json())
//     .then((json) => {
//       setPostData(json.data);
//       console.log(json.data)
//     })
//     .catch(console.log('request failed, useApi'));
//   }, [])

// const [toggleStory, setToggleStory] = useState(false);

// const toggleStoryBtn = () => {
//   setToggleStory(!toggleStory);
// };
//  {/* {toggleStory ? (
//           <div>
//             <h2>{selectedPost.title}</h2>
//             <h3>{selectedPost.region}</h3>
//             <h4>{selectedPost.country}</h4>
//             <h5>{selectedPost.locationName}</h5>
//             <p>{selectedPost.story} </p>
//           </div>
//         ) : null} */}
