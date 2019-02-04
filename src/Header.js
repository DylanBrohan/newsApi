import React from "react";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Form } from "react-bootstrap/Button";
import { FormControl } from "react-bootstrap/Button";

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
    );
  }
}
