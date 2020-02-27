import React from "react";
import ShowInfo from "./showInfo";
import { Link, Switch, Route, BrowserRouter } from "react-router-dom";
import SpaHotel from "./spaResortHotel";

const spa = [
  {
    id: 1,
    name: "Baile Felix",
    description: "Details. Istoria stațiunii Băile Felix"
  },
  {
    id: 2,
    name: "Baile Govora",
    description: "Details. Istoria statiunii Baile Govora"
  }
  //   { id: 3, name: "Baile Herculane" },
  //   { id: 4, name: "Baile Olanesti" },
  //   { id: 5, name: "Baile Tusnad" },
  //   { id: 6, name: "Slanic Moldova" },
  //   { id: 7, name: "Sovata" }
];
export default function SpaResort({ match }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="sidebar">
        <h1>Statiuni Balneo</h1>
        {spa.map(spaItem => (
          <h2 key={spaItem.name}>
            <Link to={`/trip/spa/${spaItem.name}`}>{spaItem.name}</Link>
          </h2>
        ))}
        <Switch>
          {spa.map((spaItem, index) => (
            <Route
              key={index}
              path={`trip/spa/${spaItem.name}`}
              component={<SpaHotel />}
            />
          ))}
        </Switch>
      </div>
      <div style={{ backgroundColor: "white" }}>
        <h1>There should be Details</h1>
      </div>
    </div>
  );
}
