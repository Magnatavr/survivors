import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import PrivateRouter from './components/HOC/PrivateRouter';
import AdminPageAddDangers from './components/Pages/AdminPageAddDangers';
import AdminPageAddLocation from './components/Pages/AdminPageAddLocation';
import AuthPage from './components/Pages/AuthPage';
import SuperAdminPage from './components/Pages/SuperAdminPage';
// import OnePostPage from './components/Pages/OnePostPage';
// import PostPage from './components/Pages/PostPage';
// import WordsPage from './components/Pages/WordsPage';
import AppNavbar from './components/UI/AppNavbar';
import { checkUserActionThunk, getAllUsersActionThunk } from './features/actions';
import { useAppDispatch, useAppSelector } from './features/reduxHooks';

function App(): JSX.Element {
  const session = useAppSelector((state) => state.userData.sessions);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUserActionThunk()).catch(() => null);
  }, []);
  useEffect(() => {
    dispatch(getAllUsersActionThunk()).catch(() => null);
  }, []);
  return (
    <Container>
      <AppNavbar />
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRouter
              isAllowed={session.status === 'logged'}
              redirectTo="/auth/signin"
            >
              <AdminPageAddLocation />
            </PrivateRouter>
          }
        />
        <Route
          path="/dangersedit"
          element={
            <PrivateRouter
              isAllowed={session.status === 'logged'}
              redirectTo="/auth/signin"
            >
              <AdminPageAddDangers />
            </PrivateRouter>
          }
        />
        <Route
          element={
            <PrivateRouter
              isAllowed={
                session.status === 'logged' &&
                session.user?.role === 'superAdmin'
              }
              redirectTo="/"
            />
          }
        >
          <Route path="/super+" element={<SuperAdminPage />} />
        </Route>
        <Route
          path="/auth/signin"
          element={
            <PrivateRouter
              isAllowed={!(session.status === 'logged')}
              redirectTo="/"
            >
              <AuthPage />
            </PrivateRouter>
          }
        />
      </Routes>
    </Container>
  );
}

export default App;
