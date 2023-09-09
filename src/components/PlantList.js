import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants}) {
  // console.log(typeof(plants))
  const listOfPlants = plants.map((plant) => <PlantCard key={plant.id} plant={plant}/>)
  return (
    <ul className="cards">{listOfPlants}</ul>
  );
}

export default PlantList;
