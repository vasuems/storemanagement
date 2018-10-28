import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  TabContent,
  TabPane,
  Col,
  Row,
  Nav,
  NavItem,
  NavLink,
  Button,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { FiSave } from 'react-icons/fi';
import { fetchSiteSettings } from '../../actions';
import { SettingForm, ChangePasswordForm } from '../../components/forms';

class Setting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: '1',
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSiteSettings());
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  };

  handleSettingSubmit = values => {
    console.log(values);
  };

  handleEtsySettingSubmit = values => {
    console.log(values);
  };

  render() {
    const { formatMessage } = this.props.intl;
    const { settings } = this.props;
    return (
      <div>
        <Breadcrumb>
          <BreadcrumbItem>
            <Button
              color="link"
              onClick={() => this.props.history.push('/dashboard')}
            >
              <FormattedMessage id="sys.dashboard" />
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <FormattedMessage id="sys.settings" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <div>
            <Nav tabs>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '1',
                  })}
                  onClick={() => {
                    this.toggle('1');
                  }}
                >
                  <b>
                    <FormattedMessage id="sys.basicInfo" />
                  </b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '2',
                  })}
                  onClick={() => {
                    this.toggle('2');
                  }}
                >
                  <b>
                    <FormattedMessage id="sys.pwd" />
                  </b>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className={classnames({
                    active: this.state.activeTab === '3',
                  })}
                  onClick={() => {
                    this.toggle('3');
                  }}
                >
                  <b>
                    <FormattedMessage id="sys.apiKeys" />
                  </b>
                </NavLink>
              </NavItem>
            </Nav>
            <TabContent
              activeTab={this.state.activeTab}
              className="bg-white padding-v20 padding-h20"
            >
              <TabPane tabId="1">
                <Row>
                  <Col sm="12">
                    <SettingForm onSubmit={this.handleSettingSubmit} />
                  </Col>
                </Row>
                <Button size="sm" color="primary">
                  <FiSave />
                  &nbsp;
                  <FormattedMessage id="sys.save" />
                </Button>
              </TabPane>
              <TabPane tabId="2">
                <Row>
                  <Col sm="12">
                    <ChangePasswordForm
                      onSubmit={this.handleApiSettingSubmit}
                    />
                  </Col>
                </Row>
                <Button size="sm" color="primary">
                  <FiSave />
                  &nbsp;
                  <FormattedMessage id="sys.save" />
                </Button>
              </TabPane>
              <TabPane tabId="3">
                <Row>
                  <Col sm="12">
                    <ChangePasswordForm
                      onSubmit={this.handleApiSettingSubmit}
                    />
                  </Col>
                </Row>
                <Button size="sm" color="primary">
                  <FiSave />
                  &nbsp;
                  <FormattedMessage id="sys.save" />
                </Button>
              </TabPane>
            </TabContent>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  null
)(injectIntl(withRouter(Setting)));
