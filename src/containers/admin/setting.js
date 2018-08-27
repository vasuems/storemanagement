import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Row, Col } from 'reactstrap';
import { FormattedMessage } from 'react-intl';
import ToggleButton from 'react-toggle-button';
import { fetchSiteSettings } from '../../actions';

class Setting extends Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
    const { dispatch } = this.props;

    dispatch(fetchSiteSettings());
  }

  render() {
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.settings" />
        </h3>
        <Row>
          <Col md={12}>
            <Table condensed responsive style={{ backgroundColor: '#fff' }}>
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="sys.name" />
                  </th>
                  <th>
                    <FormattedMessage id="sys.desc" />
                  </th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Product 1</td>
                  <td>asf ads fasdfasd</td>
                  <td>
                    <ToggleButton
value={false} onToggle={() => {}} />
                  </td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return ({
    settings: state.settingReducer.settings
  })
}

export default connect(mapStateToProps, null)(Setting);
