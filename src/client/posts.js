import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';

import AllPosts from './all-posts';
import SinglePost from './single-post';

class Posts extends Component {
   render() {
      return (
         <div className='posts'>
            <Switch>
               <Route exact path='/posts' component={AllPosts} />
               <Route path='/posts/:id' component={SinglePost} />
            </Switch>
         </div>
      );
   }
}

export default Posts;