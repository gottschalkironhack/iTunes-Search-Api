import React from 'react';
import { Col } from 'react-bootstrap';

const BookmarkCounter = (props) => {
  const { bookMarks } = props;
  const bookmarkCount = bookMarks.length;
  return (
    <Col>Bookmarks {bookmarkCount}</Col>
  )
};

export default BookmarkCounter;

