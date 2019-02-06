import React from "react";
import { Form, Col, Row } from "react-bootstrap";

//Could be adjusted to take a prop containing the list of radio button options
class SortRadioButton extends React.Component {
  render() {
    return (
      <Form.Group as={Row}>
        <Form.Label as="legend" column sm={2}>
          Sort:
        </Form.Label>
        <Col sm={10}>
          <Form.Check
            type="radio"
            label="None"
            value="yes"
            name="formHorizontalRadios"
            id="formHorizontalRadios1"
          />
          <Form.Check
            type="radio"
            label="A-Z"
            value="yes"
            name="formHorizontalRadios"
            id="formHorizontalRadios2"
          />
        </Col>
      </Form.Group>
    );
  }
}

export default SortRadioButton;
