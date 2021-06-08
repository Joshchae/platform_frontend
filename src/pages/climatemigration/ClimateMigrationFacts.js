import React from "react";
import "./ClimateMigration.css";
import FactCards from "../../components/cards/FactCards.js";
import "./../../components/cards/Cards.css";
import factData from "./factData";

function ClimateMigrationFacts() {
  return (
    <div className="grid" style={{ margin: "auto", width: "50%" }}>
      {factData.map((item, index) => (
        <FactCards fact={item} key={`card-${index}`} />
      ))}
    </div>
  );
}

export default ClimateMigrationFacts;
