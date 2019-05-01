import React from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card
} from 'react-bootstrap';
import './styles.scss';

export const Song = ({ song }) => {
  const {
    trackId,
    trackName,
    collectionName,
    artworkUrl100,
    addToFavorites,
  } = song;

  function handleClick (){
    addToFavorites(trackId)
  }

  const songUX = 
    <Col sm="12" md="3">
      <Card>
        <Card.Img className='album-image' src={artworkUrl100} />
        <Card.Body>
          <Card.Title>
            {trackName}
          </Card.Title>
          <Card.Text>
            {collectionName}
          </Card.Text>
        </Card.Body>
        <div id={trackId} onClick={handleClick} />
      </Card>
    </Col>
  
  return songUX;
}

Song.propTypes = {
  song: PropTypes.object.isRequired,
};
