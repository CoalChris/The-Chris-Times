import React, {Component} from 'react';
import { Navbar, Nav, NavDropdown, NavItem, MenuItem } from 'react-bootstrap';

class MainNav extends Component {
   render() {
      return (
         <Navbar inverse collapseOnSelect className='container-fluid'>
            <div className='row-fluid'>
               <Navbar.Header>
                  <Navbar.Brand>
                     <a href='/'>TCT</a>
                  </Navbar.Brand>
                  <Navbar.Toggle />
               </Navbar.Header>
               <Navbar.Collapse>
                  <Nav>
                     <NavItem eventKey={1}><a href='/posts'>One</a></NavItem>
                     <NavItem eventKey={2}><a href='#'>Two</a></NavItem>
                     <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
                        <MenuItem eventKey={3.1}>Action</MenuItem>
                        <MenuItem eventKey={3.2}>Another action</MenuItem>
                        <MenuItem eventKey={3.3}>Something else here</MenuItem>
                        <MenuItem divider />
                        <MenuItem eventKey={3.3}>Separated link</MenuItem>
                     </NavDropdown>
                  </Nav>
                  <Nav pullRight>
                     <NavItem eventKey={1}><a href='#'>Left</a></NavItem>
                     <NavItem eventKey={2}><a href='#'>Right</a></NavItem>
                  </Nav>
               </Navbar.Collapse>
            </div>
         </Navbar>
      );
   }
}

export default MainNav;