import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Card
} from 'react-bootstrap';
import './styles.scss';

export const Song = ({ song, addToFavorites, deleteBookMark }) => {
  //let songSelected = 'song-favorite';
  const [songSelected, setSelected] = useState('');
  const iconClass = `${songSelected} fas fa-heart`
  const {
    trackId,
    trackName,
    collectionName,
    artworkUrl100,
  } = song;

  function toggleClass() {
    songSelected === '' ? setSelected('song-favorite') : setSelected('');
  }

  const handleClick = () => {
    toggleClass();
    if (songSelected === 'song-favorite') deleteBookMark(trackId);
    else{ 
      return addToFavorites(trackId);
    }
  }

  const songUX = 
    <Col sm="12" md="3" key={trackId}>
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
        <div className='text-right mr-3 mb-3' id={trackId} onClick={handleClick}><i className={iconClass}></i></div>
      </Card>
    </Col>
  
  return songUX;
}

Song.propTypes = {
  song: PropTypes.object.isRequired,
};
