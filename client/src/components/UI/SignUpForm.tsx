import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { addNewAdminActionThunk } from '../../features/actions';
import { useAppDispatch } from '../../features/reduxHooks';
import type { UserSignUpForm } from '../../types';

export default function SignUpForm(): JSX.Element {
  const dispatch = useAppDispatch();
  const [input, setInput] = useState({ name: '', email: '', password: '' });

  const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const data = Object.fromEntries(
      new FormData(e.currentTarget),
    ) as UserSignUpForm;

    dispatch(addNewAdminActionThunk(data)).catch(() => null);
    setInput({ name: '', email: '', password: '' });
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          placeholder="Title"
          value={input.name}
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Title"
          value={input.email}
          onChange={(e) => setInput({ ...input, email: e.target.value })}
        />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          placeholder="Title"
          value={input.password}
          onChange={(e) => setInput({ ...input, password: e.target.value })}
        />
        <Form.Text className="text-muted" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
