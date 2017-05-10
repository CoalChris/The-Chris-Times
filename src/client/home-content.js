import React, {Component} from 'react';

import Sidebar from './sidebar';
import Articles from './articles';

class HomeContent extends Component {
   render() {
      return (
         <section className='content'>
            <Sidebar />
            <Articles />
         </section>
      );
   }
}

export default HomeContent;