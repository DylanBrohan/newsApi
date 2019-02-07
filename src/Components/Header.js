import React from "react";
import { Nav, Navbar } from "react-bootstrap";
// import { BrowserRouter, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="/">News Room | </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            {/* <BrowserRouter>
            <Link to={{pathname: '/Sports', page: 'sport'}}>Sport</Link>
            <Link to={{pathname: '/', page: 'news'}}>News</Link>
            </BrowserRouter> */}
            <Nav.Link href="/">Republic of Ireland</Nav.Link>
            <Nav.Link href="/Sports">Sports</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
