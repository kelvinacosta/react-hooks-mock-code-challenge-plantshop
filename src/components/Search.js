import React,{useState} from "react";

function Search({onSearchChange}) {
  
  const [searchPlant, setSearchPlant] = useState("");
  
  const handleSearchItem = (e) => {
    const plantText = e.target.value;
    setSearchPlant(plantText)
    onSearchChange(searchPlant)
  }

  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handleSearchItem}
        value={searchPlant}
      />
    </div>
  );
}

export default Search;
