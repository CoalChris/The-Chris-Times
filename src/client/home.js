import React, {Component} from 'react';
import { Route, Switch, Link} from 'react-router-dom';

import HomeJumbotron from './jumbotron';
import HomeContent from './home-content';

class Home extends Component {
   render() {
      return (
         <main>
            <HomeJumbotron />
            <HomeContent />
         </main>
      );
   }
}

export default Home;