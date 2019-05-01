import React, { Component } from 'react';
import { Form } from 'react-bootstrap';
import { getSongsData } from '../../actions/getSongsData';
import debounce from 'lodash/debounce';
import { connect } from 'react-redux';


class Search extends Component {

  debounceEvent(...args) {
    this.debouncedEvent = debounce(...args);
    return e => {
      e.persist();
      return this.debouncedEvent(e);
    }
  } 

  handleOnChange = (e) => {
    const searchQuery = e.target.value;
    this.props.dispatch(getSongsData(searchQuery))
  };

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="input" onChange={this.debounceEvent(this.handleOnChange, 500)} placeholder="search" />
        </Form.Group>
      </Form>
    )
  }
}

export default connect()(Search);

