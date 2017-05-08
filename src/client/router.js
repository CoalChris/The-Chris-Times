import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNav from './navbar';
import AppRoot from './app';
import BreadcrumbNav from './breadcrumb';
import Test from './test';

var AppRouter = (
   <Router>
      <div className='app'>
         <MainNav />
         <Switch>
            <Route exact path='/' component={AppRoot} />
            <Route path='/posts' component={BreadcrumbNav} />
            <Route path='/test' component={Test} />
         </Switch>
      </div>
   </Router>
);

export default AppRouter;