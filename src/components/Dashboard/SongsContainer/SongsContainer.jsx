import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import bookMarkAsFavorite from '../../../actions/addFavorites';
import deleteBookMark from '../../../actions/deleteFavorite';
import { SongsList } from './SongsList/SongsList';
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner';

class SongsContainer extends Component {
  
  addToFavorites = (id) => {
    this.props.dispatch(bookMarkAsFavorite(id));
  }

  deleteFromBookMarks = (id) => {
    this.props.dispatch(deleteBookMark(id));
  }

  render() {
    const { songs, loading } = this.props;
    if (loading) return <LoadingSpinner />;
    return <SongsList addToFavorites={this.addToFavorites} deleteBookMark={this.deleteFromBookMarks} songs={songs} />
  }
}

const mapStateToProps = ({ songs, fetching }) => {
  return { 
    songs, 
    loading: fetching.status 
  };
}

SongsContainer.propTypes = {
  loading: PropTypes.bool.isRequired,
  songs: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(SongsContainer);
