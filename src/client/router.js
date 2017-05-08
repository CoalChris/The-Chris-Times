import React from 'react';
import { Router, BrowserHistory, Route, IndexRoute } from 'react-router';

import AppRoot from './app';
import BreadcrumbNav from './breadcrumb';

var AppRouter = (
   <Router history={BrowserHistory}>
      <Route path='/' component={AppRoot}>
         <Route path='posts' component={BreadcrumbNav} />
      </Route>
   </Router>
);

export default AppRouter;