import React, { useState } from "react";
import ClimateMigrationMap from "./ClimateMigrationMap";
import ClimateMigrationFact from "./ClimateMigrationFacts";
// import ClimateMigrationSubmit from "./ClimateMigrationSubmit";
import Button from "react-bootstrap/Button";
import "./ClimateMigration.css";

function ClimateMigrationHome() {
  //   const [renderMap, setRenderMap] = useState(true);
  //   const [renderBgi, setRenderBgi] = useState(false);
  //   const [renderSubmit, setRenderSubmit] = useState(false);
  //   const [renderStory, setRenderStory] = useState(false);

  //   const toggleMap = () => {
  //     setRenderMap(!renderMap);
  //   };
  //   const toggleBgi = () => {
  //     setRenderBgi(!renderBgi);
  //   };
  //   const toggleSubmit = (e) => {
  //     e.preventDefault();
  //     setRenderSubmit(!renderSubmit);
  //     setRenderStory(!renderStory);
  //   };

  const [renderMap, setRenderMap] = useState(true);
//   const [renderSubmit, setRenderSubmit] = useState(false);

  const toggleButton = () => {
    setRenderMap(!renderMap);
  };

//   const toggleSubmit = (e) => {
//     e.preventDefault();
//   };

  return (
    <div>
      <div>
        <Button variant="success" onClick={toggleButton}>
            Background/Stories
            </Button>
            <Button variant="success">Submit your story</Button>
            <div>
            {renderMap ? <ClimateMigrationMap /> : <ClimateMigrationFact />}
            </div>
      </div>
    </div>
  );
}

export default ClimateMigrationHome;

// /*
//     <button onClick={toggleBgi}>Background information</button>
//       <button onClick={toggleMap}>Stories around</button>
//       {renderMap ? (
//         <>
//           <button onClick={toggleSubmit}>Submit your story</button>
//           {renderBgi && renderMap ? (
//             <ClimateMigrationFact />
//           ) : (
//             <ClimateMigrationMap />
//           )}
//           {/* {renderStory ? "" : <ClimateMigrationStories />} */}
//         </>
//       ) : (
//         ""
//       )}
//       {/* {renderBgi ? <ClimateMigrationFact /> : ""} */}
//       {renderSubmit ? (
//         <ClimateMigrationSubmit toggleSubmit={toggleSubmit} />
//       ) : (
//         ""
//       )}


//   const [renderMap, setRenderMap] = useState(true);
//   const [renderSubmit, setRenderSubmit] = useState(false);
//   const [toggleBtn, setToggleBtn] = useState(true)

//   const toggleButton = (e) => {
//     setRenderMap(!renderMap);
//     setToggleBtn(!toggleBtn)
//     e.preventDefault()
//   };

//   const toggleSubmit = (e) => {
//     e.preventDefault();
//     setRenderSubmit(!renderSubmit)
//   };