import React, {Component} from 'react';

import Articles from './articles';

class AllPosts extends Component {
   render() {
      return (
         <div className='all-posts'>
            <h1 className='posts-title'>Newest Posts</h1>
            <Articles />
         </div>
      );
   }
}

export default AllPosts;