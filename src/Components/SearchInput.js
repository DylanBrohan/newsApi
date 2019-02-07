import React from "react";
import { Form, Col, Row } from "react-bootstrap";

//Could be adjusted to take a prop containing the list of radio button options
class SearchInput extends React.Component {
  render() {
    return (
        <Form>
        <Form.Group as={Row}>
          <Col xs={{span: 8, offset: 2}}>
            <Form.Control

              value={this.props.value}
              onChange={this.props.handleChange}
              placeholder={this.props.placeholder}
            />
          </Col>
        </Form.Group>
      </Form>
    );
  }
}

export default SearchInput;