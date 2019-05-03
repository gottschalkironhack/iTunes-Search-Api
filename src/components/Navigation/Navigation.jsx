import React, { Component, Fragment } from 'react';
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
import { connect } from 'react-redux';
import Dashboard from '../Dashboard/Dashboard';
import Search from './Search/Search';
import Page404 from '../Errors/404';
import BookmarkCounter from './BookmarkCounter/BookmarkCounter';

class Navigation extends Component {
  
  render(){
    let BookmarkCounterUx;
    const { bookMarks } = this.props;
    BookmarkCounterUx = bookMarks
    ? <BookmarkCounter bookMarks={this.props.bookMarks}/>
    : null;
    return (
      <Fragment>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">itunes Search</NavbarBrand>
          <Search />
          { BookmarkCounterUx }
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
  }
}

const mapStateToProps = ({ songs }) => {
  return{ 
    bookMarks: songs.bookMarks,
  }
}

export default connect(mapStateToProps)(Navigation);