import React, {Component} from 'react';
import {Link} from 'react-router-dom';

//import MainNav from './navbar';

class Home extends Component {
   render() {
      return (
         <main>
            <Link to='test'>Welcome to The Chris Times</Link>
            <div>Content goes here</div>
            <p>Hello</p>
         </main>
      );
   }
}

export default Home;