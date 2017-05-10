import React, {Component} from 'react';
import { Navbar, Row, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

class MainNav extends Component {
   render() {
      return (
         <Navbar inverse collapseOnSelect fluid className='main-nav'>
            <Row>
               <Navbar.Header className='col-sm-1'>
                  <Navbar.Brand>
                     <LinkContainer to='/'><a>TCT</a></LinkContainer>
                  </Navbar.Brand>
                  <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse className='navbar-collapse'>
                  <Nav>
                     <NavItem eventKey={1}><LinkContainer to='/posts'><div>One</div></LinkContainer></NavItem>
                     <NavItem eventKey={2}><LinkContainer to='/test'><div>Two</div></LinkContainer></NavItem>
                     <NavDropdown eventKey={3} title="Dropdown" id='main-nav-dropdown'>
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                     </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                     <NavItem eventKey={1}><LinkContainer to='#'><div>Left</div></LinkContainer></NavItem>
                     <NavItem eventKey={2}><LinkContainer to='#'><div>Right</div></LinkContainer></NavItem>
                  </Nav>
               </Navbar.Collapse>
            </Row>
         </Navbar>
      );
   }
}

export default MainNav;