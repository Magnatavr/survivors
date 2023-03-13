import React, { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import {
  getAllCountryActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
} from '../../features/actions';
import type { CountryLocTypeForm } from '../../types';

export default function AddPostForm(): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCountryActionThunk()).catch(() => null);
  }, []);
  useEffect(() => {
    dispatch(getAllLocationActionThunk()).catch(() => null);
  }, []);
  const allCountry = useAppSelector((state) => state.itemData.country);
  const allLocation = useAppSelector((state) => state.itemData.allLocations);
  const handleSwitchCountry = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    dispatch(getAllLocationsInCountryActionThunk(e.target.value)).catch(
      () => null,
    );
  };
  const contextLocation = useAppSelector((state) => state.itemData.locations);

  // const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
  //   e.preventDefault();
  //   const data = Object.fromEntries(
  //     new FormData(e.currentTarget),
  //   ) as CountryLocTypeForm;

  //   dispatch(signInUserActionThunk(data)).catch(() => null);
  // };
  return (
    <Form>
      <Form.Group controlId="formBasicSelect">
        <Form.Label>Select an option</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSwitchCountry}
          name="id"
          defaultValue="Выбрать страну"
        >
          <option disabled>Выбрать страну</option>
          {allCountry?.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicLogin">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name="nameLoc" placeholder="Title" />
        <Form.Text className="text-muted" />
      </Form.Group>
      <div className="text-center mb-3">
        <Button variant="primary" type="submit">
          Добавить локацию
        </Button>
      </div>
    </Form>
  );
}
