import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Navbar,
  Nav,
  UncontrolledDropdown,
  NavLink,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
  NavbarBrand,
  Container,
  Badge,
} from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import { FaRegBell } from 'react-icons/fa';
import jwt from 'jsonwebtoken';
import { fetchAccount } from '../actions';
import config from '../config';

class Navigation extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    //TODO: replace user ID
    if (window.location.pathname !== '/') {
      const { data: { accountId } } = jwt.decode(localStorage.getItem(config.accessTokenKey));
      dispatch(fetchAccount(accountId));
    }
  }
  render() {
    const { account } = this.props;
    return (
      <div className="admin-navbar">
        <Container fluid>
          <Navbar light expand="md">
            <NavbarBrand href="/dashboard">
              <FormattedMessage id="site.name" />
            </NavbarBrand>
            <Nav className="ml-auto">
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FaRegBell size={18} />
                  <Badge color="danger">1</Badge>
                </DropdownToggle>
                <DropdownMenu style={{ marginLeft: -100, width: 280 }}>
                  <DropdownItem>
                    <NavLink href="#" style={{ whiteSpace: 'normal' }}>
                      <b>A new product has been created.</b>
                      <br />
                      <span className="text-muted">
                        Your collegue John Doe has created a new product:
                        sdlfladsjf
                      </span>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="#">
                      <b>A new product has been created.</b>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  {account ? account.user.name : ''}
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/settings">
                      <FormattedMessage id="sys.myAccount" />
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/">
                      <FormattedMessage id="sys.logout" />
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Navbar>
        </Container>
      </div>
    );
  }
}

Navigation.propTypes = {
  dispatch: PropTypes.func.isRequired,
  account: PropTypes.object,
};

const mapStateToProps = state => ({
  account: state.accountReducer.account,
});

export default connect(mapStateToProps, null)(Navigation);
