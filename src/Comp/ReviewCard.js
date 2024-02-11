import React from 'react';
import Card from 'react-bootstrap/Card';

const ReviewCard = ({ review }) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>{review.gameName}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{review.userName}</Card.Subtitle>
        <Card.Text>{review.text}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ReviewCard;
