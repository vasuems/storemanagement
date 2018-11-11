import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col } from 'reactstrap';
import Home from './containers/home';
import Dashboard from './containers/dashboard/dashboard';
import CustomerList from './containers/customerList';
import {
  OrderList,
  Order,
  ProductList,
  ProductCategoryList,
  Payment,
  Setting,
  ProductCategory,
  Product,
  SalesReportList,
  SupplierList,
  Supplier,
} from './containers';
import NavBar from './containers/navigation';
import SideBarContent from './components/sideBar';

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <Dashboard />,
  },
  {
    path: '/dashboard',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <Dashboard />,
  },
  {
    path: '/orders',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <OrderList />,
  },
  {
    path: '/orders/:id',
    sidebar: () => <SideBarContent />,
    main: () => <Order />,
  },
  {
    path: '/categories',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <ProductCategoryList />,
  },
  {
    path: '/categories/:id',
    sidebar: () => <SideBarContent />,
    main: () => <ProductCategory />,
  },
  {
    path: '/new-category',
    sidebar: () => <SideBarContent />,
    main: () => <ProductCategory />,
  },
  {
    path: '/customers',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <CustomerList />,
  },
  {
    path: '/products',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <ProductList />,
  },
  {
    path: '/new-product',
    sidebar: () => <SideBarContent />,
    main: () => <Product />,
  },
  {
    path: '/products/:id',
    sidebar: () => <SideBarContent />,
    main: () => <Product />,
  },
  {
    path: '/suppliers',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <SupplierList />,
  },
  {
    path: '/new-supplier',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <Supplier />,
  },
  {
    path: '/suppliers/:id',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <Supplier />,
  },
  {
    path: '/payments',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <Payment />,
  },
  {
    path: '/sales-reports',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <SalesReportList />,
  },
  {
    path: '/settings',
    exact: true,
    sidebar: () => <SideBarContent />,
    main: () => <Setting />,
  },
];

const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <div>
        <NavBar />
        <div style={{ display: 'flex', height: '100%' }}>
          <Col md={2} className="sidebar">
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.sidebar}
              />
            ))}
          </Col>
          <Col md={{ size: 10, offset: 2 }} style={{ padding: 0 }}>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                component={route.main}
              />
            ))}
          </Col>
        </div>
      </div>
    </div>
  </Router>
);

export default App;
