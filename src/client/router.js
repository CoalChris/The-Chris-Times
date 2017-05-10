import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainNav from './navbar';
import Home from './home';
import BreadcrumbNav from './breadcrumb';
import Test from './test';
import ScrollUp from './scroll';
import Footer from './footer';

var AppRouter = (
   <Router>
      <div className='app'>
         <MainNav />
         <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/posts' component={BreadcrumbNav} />
            <Route path='/test' component={Test} />
         </Switch>
         <ScrollUp />
         <Footer />
      </div>
   </Router>
);

export default AppRouter;