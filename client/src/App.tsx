import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './components/Pages/AuthPage';
import MainPage from './components/Pages/MainPage';
// import OnePostPage from './components/Pages/OnePostPage';
// import PostPage from './components/Pages/PostPage';
// import WordsPage from './components/Pages/WordsPage';
import AppNavbar from './components/UI/AppNavbar';
import { checkUserActionThunk } from './features/actions';
import { useAppDispatch } from './features/reduxHooks';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkUserActionThunk()).catch(() => null);
  }, []);
  return (
    <Container>
      <AppNavbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/auth/:type" element={<AuthPage />} />
      </Routes>
    </Container>
  );
}

export default App;
