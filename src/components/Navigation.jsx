import React, { Fragment } from 'react';
import {
  Navbar,
  Nav,
  NavbarBrand,
  Collapse,
  NavItem,
  Container,
} from 'reactstrap';
import {
  Route,
  Switch,
  NavLink,
} from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Search from './Search/Search';
import Page404 from './Errors/404';


const Navigation = () => {
  return (
    <Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">itunes Search</NavbarBrand>
        <Search />
        <Collapse className="navbar-collapse">
          <Nav className="ml-sm-auto navbar-nav">
            <NavItem className="p-2">
              <NavLink activeClassName="active" to="/">Dashboard</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      <Container className="content mt-8">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route component={Page404} />
        </Switch>
      </Container>
    </Fragment>
  );
};

export default Navigation;