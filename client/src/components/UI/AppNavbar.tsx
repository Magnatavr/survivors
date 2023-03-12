import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { logouUserActionThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';

export default function AppNavbar(): JSX.Element {
  const userData = useAppSelector((state) => state.userData);
  const dispatch = useAppDispatch();

  const logoutHandler = (): void => {
    dispatch(logouUserActionThunk()).catch(() => null);
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Nav className="me-auto" style={{ flexGrow: 1 }}>
          {userData.sessions.user?.role === 'superAdmin' && (
            <NavLink className="nav-link" to="/super+">
              + ADMIN
            </NavLink>
          )}
          {userData.sessions.status !== 'logged' && (
            <NavLink className="nav-link" to="/auth/signin">
              signin
            </NavLink>
          )}
        </Nav>
        {userData.sessions.status === 'logged' && (
          <>
            <Nav className="me-auto">
              <NavLink className="nav-link" to="/">
                Add article
              </NavLink>
              <span className="nav-link">
                {' '}
                Hello, {userData?.sessions.user?.name}
              </span>
            </Nav>
            <Button
              onClick={logoutHandler}
              className="nav-link"
              variant="warning"
            >
              {' '}
              logout
            </Button>
          </>
        )}
      </Container>
    </Navbar>
  );
}
