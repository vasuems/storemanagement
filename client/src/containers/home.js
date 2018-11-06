import React, { Component } from 'react';
import {
  Col, Form, Input, Button,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { LoginForm } from './forms';
import Footer from '../components/footer';

class Home extends Component {
  render() {
    return (
      <div className="login-page">
        <div className="login-box">
          <Col sm={6} md={3}>
            <p id="login-site-name">
              <FormattedMessage id="site.name" />
            </p>
            <LoginForm />
          </Col>
        </div>
        <Footer style={{ flex: 0.1 }} />
      </div>
    );
  }
}

export default Home;
