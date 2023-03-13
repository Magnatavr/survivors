import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddPostForm from '../UI/AddPostForm';


export default function AdminPageAddLocation(): JSX.Element {
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}>
        <div className="text-center mb-3">
          <h6>Добавить локацию в страну</h6>
        </div>
        <AddPostForm />
      </Col>
    </Row>
  );
}
