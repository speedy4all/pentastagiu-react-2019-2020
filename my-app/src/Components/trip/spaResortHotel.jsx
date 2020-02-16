import React from "react";
import { Link } from "react-router-dom";
const hotel = [
  { id: 1, name: "Muncel", stars: 2, price: 125 },
  { id: 2, name: "Mures", stars: 2, price: 338 },
  { id: 3, name: "Poienita", stars: 3, price: 386 },
  { id: 4, name: "Nufarul", stars: 3, price: 386 },
  { id: 5, name: "Hotel Termal", stars: 3, price: 423 },
  { id: 6, name: "Aqua President Spa", stars: 4, price: 554 },
  { id: 7, name: "Lotus Therm Spa & Luxury Resort", stars: 4, price: 773 }
];
const SpaHotel = ({ match }) => {
  console.log(match);
  return (
    <div>
      <h1>Spa Resorts Hotel</h1> 
      <div>
        {hotel.map(hotelItem => (
          <h2 key={hotelItem.id}>
            <Link to={`${match.url}/${hotelItem.id}`}>
              <span> Name: {hotelItem.name} </span>
              <span> Stars: {hotelItem.stars} </span>
              <span> Price: {hotelItem.stars} lei </span>
            </Link>
          </h2>
        ))}
      </div>
    </div>
  );
};

export default SpaHotel;
