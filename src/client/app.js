import React, {Component} from 'react';

import MainNav from './navbar';

class AppRoot extends Component {
   render() {
      return (
         <div className='app'>
            <main>
               <MainNav />
               <h1>Welcome to The Chris Times</h1>
               {this.props.children}
            </main>
         </div>
      );
   }
}

export default AppRoot;