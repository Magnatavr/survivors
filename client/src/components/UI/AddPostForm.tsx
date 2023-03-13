import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import {
  getAllCountryActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
} from '../../features/actions';
// import type { CountryLocTypeForm } from '../../types';

export default function AddPostForm(): JSX.Element {
  const [statusList, setStatusList] = useState(false);
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
    if (allLocation) {
      setStatusList(true);
    }
  };
  const contextLocation = useAppSelector((state) => state.itemData.locations);
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
      {statusList && (
        <Form.Group controlId="formBasicCheckbox">
          {allLocation?.map((location) => (
            <Form.Check
              key={location.id}
              type="checkbox"
              label={location.name}
              checked={contextLocation.some(
                (el) => el.id === location.id,
              )}
            />
          ))}
        </Form.Group>
      )}
      <div className="text-center mb-3">
        <Button variant="primary" type="submit">
          Добавить локацию
        </Button>
      </div>
    </Form>
  );
}
