import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import '../Styles/styles.css';
import { FormControl, FormGroup } from 'react-bootstrap';
import axios from 'axios';

export default function AdminCreateItemPage(): JSX.Element {
  const [statusCoun, setStatusCoun] = useState<boolean>(false);
  const [statusLoc, setStatusLoc] = useState<boolean>(false);
  const [statusDang, setStatusDang] = useState<boolean>(false);
  const [input, setInput] = useState({ name: '' });
  const [input1, setInput1] = useState({ name: '', article: '' });

  const handleCounClick = (): void => {
    setStatusCoun(!statusCoun);
    if (statusLoc) {
      setStatusLoc(!statusLoc);
    }
    if (statusDang) {
      setStatusDang(!statusDang);
    }
    setInput({ name: '' });
  };

  const handleLocClick = (): void => {
    setStatusLoc(!statusLoc);
    if (statusCoun) {
      setStatusCoun(!statusCoun);
    }
    if (statusDang) {
      setStatusDang(!statusDang);
    }
    setInput({ name: '' });
  };

  const handleDangClick = (): void => {
    setStatusDang(!statusDang);
    if (statusLoc) {
      setStatusLoc(!statusLoc);
    }
    if (statusCoun) {
      setStatusCoun(!statusCoun);
    }
    setInput1({ name: '', article: '' });
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post<void>('/api/new/country', input)
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      });
    setInput({ name: '' });
  };

  const submitLocHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post<void>('/api/new/location', input)
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      });
    setInput({ name: '' });
  };
  const submitArticleHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    axios
      .post<void>('/api/new/article', input1)
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      });
    setInput1({ name: '', article: '' });
  };

  return (
    <Row className="d-flex justify-content-center align-items-start my-4 admin-create-item-page">
      <Col md={4} className="d-flex flex-column mb-3 align-items-center">
        <Button className="my-button" onClick={handleCounClick}>
          +Страна
        </Button>
        {statusCoun && (
          <Form className="mt-7 text-center Form" onSubmit={submitHandler}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Название страны"
                name="name"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </FormGroup>
            <Button type="submit" className="my-add">
              Добавить
            </Button>
          </Form>
        )}
        <Button className="my-button" onClick={handleLocClick}>
          +Локация
        </Button>
        {statusLoc && (
          <Form className="mt-7 text-center Form" onSubmit={submitLocHandler}>
            <FormGroup>
              <FormControl
                type="text"
                placeholder="Название локации"
                name="name"
                value={input.name}
                onChange={(e) => setInput({ ...input, name: e.target.value })}
              />
            </FormGroup>
            <Button type="submit" className="my-add">
              Добавить
            </Button>
          </Form>
        )}
        <Button className="my-button" onClick={handleDangClick}>
          +Статья
        </Button>
        {statusDang && (
          <Form
            className="text-center mb-5 Form"
            onSubmit={submitArticleHandler}
          >
            <FormGroup className="mb-1">
              <FormControl
                type="text"
                placeholder="Название статьи"
                name="name"
                value={input1.name}
                onChange={(e) => setInput1({ ...input1, name: e.target.value })}
              />
            </FormGroup>
            <FormGroup>
              <FormControl
                as="textarea"
                rows={10}
                placeholder="Текст статьи"
                name="text"
                value={input1.article}
                onChange={(e) => setInput1({ ...input1, article: e.target.value })}
              />
            </FormGroup>
            <Button type="submit" className="my-add">
              Добавить
            </Button>
          </Form>
        )}
      </Col>
    </Row>
  );
}
