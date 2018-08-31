import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form,
  FormGroup,
  Col,
  Label,
  Input,
  FormText,
  Button
} from 'reactstrap';
import { injectIntl, FormattedMessage } from 'react-intl';
import FormItem from '../../components/formItem';
import { fetchSiteSettings } from '../../actions';

class Setting extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSiteSettings());
  }

  render() {
    const { formatMessage } = this.props.intl;
    const { settings } = this.props;
    return (
      <div className="content-body">
        <h3>
          <FormattedMessage id="sys.settings" />
        </h3>
        <Form style={{ backgroundColor: '#fff', padding: 20 }}>
          <FormItem
            label={<FormattedMessage id="sys.siteName" />}
            fieldName="site-name"
            fieldType="text"
            fieldValue={settings.siteName}
            fieldPlaceholder={formatMessage({ id: 'sys.siteName' })}
          />
          <FormGroup check row>
            <Col sm={{ size: 10, offset: 2 }}>
              <Button color="primary">
                <FormattedMessage id="sys.save" />
              </Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  settings: state.settingReducer.settings
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(Setting));
