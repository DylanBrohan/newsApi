import React from "react";
import { Card } from "react-bootstrap";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Card title</Card.Title>
          <Card.Text>
            
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </div>
    );
  }
}

export default Article;
