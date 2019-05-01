import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { Song } from './Song/Song';

export const SongsList = ({ songs, addToFavorites }) => {
  const song = songs.songs.map(song => {
    return (
      <Song addToFavorite={addToFavorites} song={song} key={song.trackId}/>
    )
  });
  return <Row className="mt-3"> {song}</Row>
}

SongsList.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  songs: PropTypes.object.isRequired,
};
