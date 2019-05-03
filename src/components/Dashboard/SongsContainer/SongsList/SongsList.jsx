import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'react-bootstrap';
import { Song } from './Song/Song';

export const SongsList = ({ songs, addToFavorites, deleteBookMark }) => {
  const song = songs.songs.map((song, index) => {
    return (
      <Song 
        addToFavorites={addToFavorites}
        song={song}
        key={index}
        deleteBookMark={deleteBookMark}
      />
    )
  });
  return <Row className="mt-3"> {song}</Row>
}

SongsList.propTypes = {
  addToFavorites: PropTypes.func.isRequired,
  songs: PropTypes.object.isRequired,
};
