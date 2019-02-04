import React from "react"

import { Nav, Navbar, Form} from "react-bootstrap"
import { FormControl } from "react-bootstrap"

class Header extends React.Component {

  searchHandler(event) {
    // console.log(event.target.value); // Log each key pressed
    const searchTerm = event.target.value
    this.searchNews(searchTerm)
  }


  render() {
    return (
      <div>
        <Navbar bg="light" variant="light">
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
          </Nav>
        </Navbar>
      </div>
    )
  }
}

export default Header