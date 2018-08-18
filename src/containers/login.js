import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Form, FormGroup, Input, Modal, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FormattedMessage } from 'react-intl';

class Login extends Component {
  render() {
    return (
      <Modal
        bsSize="large"
        show={this.props.show}
        aria-labelledby="contained-modal-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-lg">Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
              <Form horizontal>
                <FormGroup controlId="formHorizontalEmail">
                  <Col sm={2}>Email</Col>
                  <Col sm={10}>
                    <Input type="email" placeholder="Email" />
                  </Col>
                </FormGroup>

                <FormGroup controlId="formHorizontalPassword">
                  <Col sm={2}>Password</Col>
                  <Col sm={10}>
                    <Input type="password" placeholder="Password" />
                  </Col>
                </FormGroup>

                <FormGroup>
                  <Col smOffset={2} sm={10}>
                    <Button type="submit"><FormattedMessage id="sys.signin" /></Button>
                  </Col>
                </FormGroup>
              </Form>
            </Col>
            <Col md={6} />
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.props.onHide}><FormattedMessage id="sys.close" /></Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(
  mapStateToProps,
  null
)(Login);
