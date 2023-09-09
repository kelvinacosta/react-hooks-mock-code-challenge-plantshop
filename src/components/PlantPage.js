import React,{useState,useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  
  const [plants,setPlants] = useState([]);

  useEffect(()=>{
    fetch("http://localhost:6001/plants")
    .then(response=>response.json())
    .then(data=>setPlants(data))
    .catch(err=>console.error("Error gettin platns",err))
  },[])

  // console.log(typeof(plants))

  const handleAddingPlant = (newPlants)=>{
    setPlants([...plants,newPlants])
  }
  const searchingPlants = (plantName) => {
    if(plantName === ""){
      setPlants(plants)
      
    }else{
    const filterPlants = plants.filter(plant=>plant.name.toLowerCase().includes(plantName.toLowerCase()))
    
    setPlants(filterPlants)
  }
  }
  return (
    <main>
      <NewPlantForm addPlant={handleAddingPlant}/>
      <Search onSearchChange={searchingPlants}/>
      <PlantList plants={plants}/>
    </main>
  );
}

export default PlantPage;
// Core Deliverables
// As a user:

// When the app starts, I can see all plants.
// I can add a new plant to the page by submitting the form.
// I can mark a plant as "sold out".
// I can search for plants by their name and see a filtered list of plants.
