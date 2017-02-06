var React = require('react');
const Link = require('react-router').Link;
const Navbar = require('react-bootstrap').Navbar;
const Nav = require('react-bootstrap').Nav;
const NavItem = require('react-bootstrap').NavItem;
const NavDropdown = require('react-bootstrap').NavDropdown;
const MenuItem = require('react-bootstrap').MenuItem;
const LinkContainer = require('react-router-bootstrap').LinkContainer;

var Navigation = React.createClass({
  render: function () {
    return (
      <Navbar inverse collapseOnSelect>
      <Navbar.Collapse>
      <Navbar.Header>
     <Navbar.Brand>
     <Link to='/'>Home</Link>
     </Navbar.Brand>
     <Navbar.Toggle />
   </Navbar.Header>
        <Nav>
        <LinkContainer to='/stat'>
          <NavItem eventKey={1}>Stat</NavItem>
        </LinkContainer>
        <LinkContainer to='/teamstat'>
          <NavItem eventKey={2}>Team stat</NavItem>
        </LinkContainer>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/stat">Link Right</NavItem>
          <NavItem eventKey={2} href="#">Link Right</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    )
  }
});

module.exports = Navigation;
