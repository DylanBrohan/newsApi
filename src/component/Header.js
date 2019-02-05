import React from "react";
import { Nav, Navbar, Form, FormControl } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="dark" expand="lg" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Top Headlines</Nav.Link>
            <Nav.Link href="#link">Source List</Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-lg-2" />
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Header;
