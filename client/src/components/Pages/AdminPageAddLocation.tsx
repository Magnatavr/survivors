import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import AddLocForm from '../UI/AddLocForm';

export default function AdminPageAddLocation(): JSX.Element {
  return (
    <Row className="d-flex justify-content-center md-5 my-4">
      <Col md={4}>
        <div className="text-center mb-3">
          <h6>Добавить локацию в страну</h6>
        </div>
        <AddLocForm />
      </Col>
    </Row>
  );
}
