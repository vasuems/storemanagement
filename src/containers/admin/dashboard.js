import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <h3>Modules</h3>
        <Row>
          <Col md={2} className="text-center">
            <Link to="/admin/orders">
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "silver",
                  lineHeight: "100px"
                }}
              >
                10 Orders
              </div>
            </Link>
          </Col>
          <Col md={2} className="text-center">
            <Link to="/admin/customers">
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "silver",
                  lineHeight: "100px"
                }}
              >
                10 Customers
              </div>
            </Link>
          </Col>
          <Col md={2} className="text-center">
            <Link to="/admin/products">
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "silver",
                  lineHeight: "100px"
                }}
              >
                10 Products
              </div>
            </Link>
          </Col>
          <Col md={2} className="text-center">
            <Link to="/admin/payment">
              <div
                style={{
                  width: "100%",
                  height: "100px",
                  backgroundColor: "silver",
                  lineHeight: "100px"
                }}
              >
                2 Payment
              </div>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
