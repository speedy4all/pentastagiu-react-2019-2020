import React from 'react';
import { withRouter, Route, Switch } from 'react-router';
import Home from '../home';
import User from '../home';
import Components from '../home';
import Trip from '../trip';
import SeaTrip from '../trip/seaTrip';
import SpaResort from '../trip/spaResort';
import SpaHotel from '../trip/spaResortHotel';
import MountainList from '../mountainsList';
import About from '../About';

class RouterConfiguration extends React.Component {
 render() {
     return (
        <main>
            <Switch>
              {/* about */}
              <Route path="/about" component={About} />
              {/* trips */}
              <Route exact path="/trip/mountain" component={MountainList} />
              <Route exact path="/trip/spa/:id" component={SpaHotel} />
              <Route exact path="/trip/spa" component={SpaResort} />
              <Route exact path="/trip/seaTrip" component={SeaTrip} />
              <Route exact path="/trip" component={Trip} />
              {/* home */}
              <Route exact path="/home/components" component={Components} />
              <Route exact path="/home/user" component={User} />
              <Route exact path="/" component={Home} />
            </Switch>

           
          </main>
     );
 }   
}

export const configWithRouter = withRouter(RouterConfiguration);