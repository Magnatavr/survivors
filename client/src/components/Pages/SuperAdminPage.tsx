import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SignUpForm from '../UI/SignUpForm';
import { useAppSelector } from '../../features/reduxHooks';

export default function SuperAdminPage(): JSX.Element {
  const admins = useAppSelector((state) => state.userData.admin);
  return (
    <Row className="d-flex justify-content-center md-5">
      <Col md={4}>
        <div className="text-center mb-3">
          <h6>Зарегистрировать нового админа</h6>
        </div>
        <SignUpForm />
      </Col>
      <Col md={4}>
        <div className="text-center mb-3">
          <h6>Список админов:</h6>
        </div>
        <ul>
          {admins.map((admin) => (
            <li key={admin.id}>
              {admin.name} ({admin.email})
            </li>
          ))}
        </ul>
      </Col>
    </Row>
  );
}
