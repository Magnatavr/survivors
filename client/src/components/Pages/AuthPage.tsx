import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignInForm from '../UI/SignInForm';

export default function AuthPage(): JSX.Element {
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}><SignInForm /></Col>
    </Row>
  );
}