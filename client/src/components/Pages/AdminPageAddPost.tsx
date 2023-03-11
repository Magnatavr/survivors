import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPostForm from '../UI/AddPostForm';

export default function AdminPageAddPost(): JSX.Element {
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}>
        <span>Написать статью</span>{' '}
        <span>-----------------------------------------------------------</span>
        <AddPostForm />
      </Col>
    </Row>
  );
}