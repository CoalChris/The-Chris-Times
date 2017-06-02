import React, {Component} from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class BreadcrumbNav extends Component {
   render() {
      return (
         <Breadcrumb className='bc-nav'>
            <Breadcrumb.Item>
               <LinkContainer to='/'><a>Home</a></LinkContainer>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
               <LinkContainer to='/posts'><a>Library</a></LinkContainer>
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
               Data
            </Breadcrumb.Item>
         </Breadcrumb>
      );
   }
}

export default BreadcrumbNav;