import React, {Component} from 'react';
import {Breadcrumb} from 'react-bootstrap';

class BreadcrumbNav extends Component {
   render() {
      return (
         <Breadcrumb className='bc-nav'>
            <Breadcrumb.Item href="#">
               Home
            </Breadcrumb.Item>
            <Breadcrumb.Item href="#">
               Library
            </Breadcrumb.Item>
            <Breadcrumb.Item active>
               Data
            </Breadcrumb.Item>
         </Breadcrumb>
      );
   }
}

export default BreadcrumbNav;