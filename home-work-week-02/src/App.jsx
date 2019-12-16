import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './containers/Layout/Layout.jsx';
import Cars from './containers/Cars/Cars.jsx';


class App extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <Layout>
        <Cars/>
      </Layout>
    );
  }
}

export default App;
