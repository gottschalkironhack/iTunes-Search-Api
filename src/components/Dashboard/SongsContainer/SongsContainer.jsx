import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { SongsList } from './SongsList/SongsList';
import { LoadingSpinner } from '../../LoadingSpinner/LoadingSpinner';

class SongsContainer extends Component {
  
  addToFavorites(id){
    console.log('add to favorites', id)

    //handle statemanagement
  }

  render() {
    const { songs, loading } = this.props;
    console.log(this.props)
    console.log('loading', loading)
    if (loading) return <LoadingSpinner />;
    return <SongsList addToFavorites={this.addToFavorites} songs={songs} />
  }
}

const mapStateToProps = ({ songs, fetching }) => {
  // console.log('state', state)
  // const { loading, songs } = state;
  console.log('updating')
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
