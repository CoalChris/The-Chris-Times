import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNav from './navbar';
import Home from './home';
import Posts from './posts';
import Test from './test';
import ScrollUp from './scroll';
import Footer from './footer';
import NotFound from './not-found';

var AppRouter = (
   <Router>
      <div className='app'>
         <MainNav />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/posts' component={Posts} />
            <Route path='/test' component={Test} />
            <Route path='/*' component={NotFound} />
         </Switch>
         <ScrollUp />
         <Footer />
      </div>
   </Router>
);

export default AppRouter;