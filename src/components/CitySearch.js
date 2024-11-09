import React from "react";

const CitySearch = ({ city, onCityChange, onSearch }) => {
  return (
    <div>
      <input
        type="text"
        value={city}
        onChange={onCityChange}
        placeholder="Enter city"
      />
      <button onClick={onSearch}>Get Weather</button>
    </div>
  );
};

export default CitySearch;
