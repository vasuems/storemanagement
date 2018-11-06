import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  Row,
  Col,
  Button,
  Pagination,
  PaginationItem,
  PaginationLink,
  Breadcrumb,
  BreadcrumbItem,
  InputGroup,
  Input,
  InputGroupAddon,
  Nav,
  NavItem,
  NavLink,
  TabContent,
  TabPane,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import { injectIntl, FormattedMessage } from 'react-intl';
import classnames from 'classnames';
import { 
  FiSearch,
} from 'react-icons/fi';
import { fetchSalesReportProducts, fetchSalesReportCategories } from '../../actions';
import { SalesReportListProductItem, SalesReportListCategoryItem } from '../../components';

class SalesReportList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1',
      dropdownOpen: false,
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchSalesReportProducts());
    dispatch(fetchSalesReportCategories());
  }

  toggle = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      });
    }
  }

  onViewClick = (id) => {
    this.props.history.push(`/products/${id}`);
  };

  onFilterSelect = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }
  render() {
    const { products, categories } = this.props;
    const { formatMessage } = this.props.intl;
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
            <FormattedMessage id="sys.products" />
          </BreadcrumbItem>
        </Breadcrumb>
        <div className="content-body">
          <Row>
            <Col md={12}>
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '1' })}
                    onClick={() => { this.toggle('1'); }}
                  >
                    <FormattedMessage id="sys.byProduct" />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({ active: this.state.activeTab === '2' })}
                    onClick={() => { this.toggle('2'); }}
                  >
                    <FormattedMessage id="sys.byCat" />
                  </NavLink>
                </NavItem>
              </Nav>
              <TabContent activeTab={this.state.activeTab} style={{backgroundColor: '#fff', padding: 15}}>
                <TabPane tabId="1">
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <InputGroup size="sm">
                        <Input placeholder={formatMessage({ id: 'sys.search' })} />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary"><FiSearch /></Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div>
                      <ButtonDropdown direction="left" size="sm" isOpen={this.state.dropdownOpen} toggle={this.onFilterSelect}>
                        <DropdownToggle caret>
                          <FormattedMessage id="sys.daily" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem><FormattedMessage id="sys.daily" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.weekly" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.monthly" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.quaterly" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.yearly" /></DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div><br />
                  <Table responsive>
                    <thead className="table-header">
                      <tr>
                        <th>
                          <FormattedMessage id="sys.productName" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.sku" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.unitPrice" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.qty" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.amount" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.profit" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        products.map(product => (
                          <SalesReportListProductItem
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            sku={product.sku}
                            price={product.price.toFixed(2)}
                            currencySign={product.currencySign}
                            quantity={product.quantity}
                            amount={product.amount.toFixed(2)}
                            profit={product.profit.toFixed(2)}
                          />
                        ))
                      }
                    </tbody>
                  </Table>
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                  </Pagination>
                </TabPane>
                <TabPane tabId="2">
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                      <InputGroup size="sm">
                        <Input placeholder={formatMessage({ id: 'sys.search' })} />
                        <InputGroupAddon addonType="append">
                          <Button color="secondary"><FiSearch /></Button>
                        </InputGroupAddon>
                      </InputGroup>
                    </div>
                    <div>
                      <ButtonDropdown direction="left" size="sm" isOpen={this.state.dropdownOpen} toggle={this.onFilterSelect}>
                        <DropdownToggle caret>
                          <FormattedMessage id="sys.daily" />
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem><FormattedMessage id="sys.daily" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.weekly" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.monthly" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.quaterly" /></DropdownItem>
                          <DropdownItem><FormattedMessage id="sys.yearly" /></DropdownItem>
                        </DropdownMenu>
                      </ButtonDropdown>
                    </div>
                  </div><br />
                  <Table responsive>
                    <thead className="table-header">
                      <tr>
                        <th>
                          <FormattedMessage id="sys.productName" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.qty" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.amount" />
                        </th>
                        <th>
                          <FormattedMessage id="sys.profit" />
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        categories.map(cat => (
                          <SalesReportListCategoryItem
                            key={cat.id}
                            id={cat.id}
                            name={cat.name}
                            quantity={cat.quantity}
                            currencySign={cat.currencySign}
                            amount={cat.amount.toFixed(2)}
                            profit={cat.profit.toFixed(2)}
                          />
                        ))
                      }
                    </tbody>
                  </Table>
                  <Pagination aria-label="Page navigation example">
                    <PaginationItem disabled>
                      <PaginationLink previous href="#" />
                    </PaginationItem>
                    <PaginationItem active>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">2</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink next href="#" />
                    </PaginationItem>
                  </Pagination>
                </TabPane>
              </TabContent>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.reportReducer.products,
  categories: state.reportReducer.categories,
});

export default connect(
  mapStateToProps,
  null
)(injectIntl(withRouter(SalesReportList)));
