import React from "react";

export default function Vans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/vans")
      .then(res => res.json()) // Corrected the typo here
      .then(data => setVans(data.vans))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // Empty array as dependency to run only once

  // Ensure vans is defined and is an array before mapping
  const vanElements = vans && Array.isArray(vans) ? vans.map(van => (
    <div key={van.id} className="van-tile">
      <img src={van.imageUrl} alt={van.name} />
      <div className="van-info">
        <h3>{van.name}</h3>
        <p>${van.price}<span>/day</span></p>
      </div>
      <i className={`van-type ${van.type} selected`}>{van.type}</i>
    </div>
  )) : null;

  return (
    <div className="van-list-container">
      <h1>Explore our van options</h1>
      <div className="van-list">
        {vanElements}
      </div>
    </div>
  );
}
