import React from "react";
import HogTile from "./HogTile";

const HogList = ({ hogs, handleBanishHog }) => (
  <div className="ui grid container">
    {hogs.map((hog) => (
      <HogTile key={hog.name} hog={hog} handleBanishHog={handleBanishHog} />
    ))}
  </div>
);

export default HogList;
