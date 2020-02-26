import React from 'react';
import {Link} from 'react-router-dom';

const About = (props) => {
  console.log('about', props)
  return (
    <div>
      About
      <Link to={{
        pathname: '/home',
      state:{
          name: 'sidona',
        email: 'sidona@yahoo.com'
      }
      }} >Home</Link>
    </div>
  );
}

export default About;
