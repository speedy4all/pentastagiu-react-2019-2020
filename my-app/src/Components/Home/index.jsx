import React from "react";
import { Link } from "react-router-dom";


// const RouteId = props => (
//   <div>
//     <h2>Route Id {props.match.params.id}</h2>
//   </div>
// );

const Home = props => {
  console.log(props.match);
  return (
    <div>
      <h2>Home</h2>
      <ul>
        <li>
          <Link to="/home/components">Components</Link>
        </li>
        <li>
          <Link to="/home/user">User</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
