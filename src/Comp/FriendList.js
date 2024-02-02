import React, { useState } from 'react';
import { Container, Card, Row, Col, Form, Button } from 'react-bootstrap';
import './Comp.css';

const FriendList = () => {
  const [friends, setFriends] = useState([
    { id: 1, name: 'John Doe', online: true },
    { id: 2, name: 'Jane Smith', online: false },
  ]);

  const [newFriendName, setNewFriendName] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  const addFriend = () => {
    if (newFriendName.trim() !== '') {
      const newFriend = {
        id: friends.length + 1,
        name: newFriendName,
        online: true,
      };

      setFriends([...friends, newFriend]);
      setNewFriendName('');
    }
  };

  const searchFriends = () => {
    return friends.filter((friend) => friend.name.toLowerCase().includes(searchTerm.toLowerCase()));
  };

  return (
    <Container fluid>
      <Card className='mx-5 mb-5 p-5 shadow-5' style={{ marginTop: '20px', background: 'hsla(0, 0%, 100%, 0.8)', backdropFilter: 'blur(30px)' }}>
        <Card.Body className='p-5 text-center'>
          <h2 className="fw-bold mb-4">Friend List</h2>

          <Row className='mb-4'>
            <Col>
              <Form.Control
                type='text'
                placeholder='Search for a friend'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col>
              <Form.Control
                type='text'
                placeholder='Add a friend'
                value={newFriendName}
                onChange={(e) => setNewFriendName(e.target.value)}
              />
            </Col>
            <Col>
              <Button className='w-100 btn-secondary' size='md' onClick={addFriend}>
                Add Friend
              </Button>
            </Col>
          </Row>

          <div className="text-start mb-4">
            <h4>Your Friends:</h4>
            {friends.map((friend) => (
              <div key={friend.id} className={`mb-3 d-flex align-items-center ${friend.online ? 'text-success' : 'text-secondary'}`}>
                {friend.online ? '●' : '○'}
                {friend.name}
              </div>
            ))}
          </div>

        </Card.Body>
      </Card>
    </Container>
  );
};

export default FriendList;
