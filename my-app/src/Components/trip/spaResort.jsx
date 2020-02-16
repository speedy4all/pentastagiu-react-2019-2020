import React from 'react';
import { Link } from 'react-router-dom';
const spa = [
    {id: 1, name:"Baile Felix"},
    {id: 2, name:"Baile Govora"},
    {id: 3, name:"Baile Herculane"},
    {id: 4, name:"Baile Olanesti"},
    {id: 5, name:"Baile Tusnad"},
    {id: 6, name:"Slanic Moldova"},
    {id: 7, name:"Sovata"},
]
const SpaResort = () => (
    <div>
        <h1>Spa Resorts</h1>
        <div>
            {spa.map(spaItem => (
               <h2 key={spaItem.id}>
                   <Link to={`/trip/spa/${spaItem.id}`}>
                       {spaItem.name}
                   </Link>
               </h2> 
            ))}
        </div>
    </div>
);

export default SpaResort;