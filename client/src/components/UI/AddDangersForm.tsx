import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import {
  getAllCountryActionThunk,
  getAllDangerActionThunk,
  getAllDangersInLocationActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
} from '../../features/actions';

export default function AddDangerForm(): JSX.Element {
  const [statusList, setStatusList] = useState<boolean>(false);
  const [currCountry, setCurrentCountry] = useState<number | null>(null);
  const [currLocation, setCurrLocation] = useState<number | null>(null);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getAllCountryActionThunk()).catch(() => null);
  }, []);
  useEffect(() => {
    dispatch(getAllLocationActionThunk()).catch(() => null);
  }, []);
  useEffect(() => {
    dispatch(getAllDangerActionThunk()).catch(() => null);
  }, []);
  const allCountry = useAppSelector((state) => state.itemData.country);
  const allLocation = useAppSelector((state) => state.itemData.allLocations);
  const allDangers = useAppSelector((state) => state.itemData.allDangers);
  const handleSwitchCountry = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCurrentCountry(Number(e.target.value));
    dispatch(getAllLocationsInCountryActionThunk(e.target.value)).catch(
      () => null,
    );
  };

  const handleSwitchLocation = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    setCurrLocation(Number(e.target.value));
    dispatch(
      getAllDangersInLocationActionThunk({
        locationId: Number(e.target.value),
        currCountry,
      }),
    ).catch(() => null);
    if (allLocation) {
      setStatusList(true);
    }
  };

  const contextLocations = useAppSelector((state) => state.itemData.locations);
  const contextDangers = useAppSelector((state) => state.itemData.dangers);

  //   const changeHandler = (locationId: number, checked: boolean): void => {
  //     if (checked) {
  //       dispatch(redactCheckboxLocationActionThunk({ locationId, currCountry }));
  //     } else {
  //       dispatch(deleteCheckboxLocationActionThunk({ locationId, currCountry }));
  //     }
  //   };

  return (
    <Form>
      <Form.Group controlId="formBasicSelect">
        <Form.Label>Выберите страну</Form.Label>
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
        <Form.Label>Выберите локацию</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSwitchLocation}
          name="id"
          defaultValue="Выбрать локацию"
        >
          <option disabled>Выбрать локацию</option>
          {contextLocations?.map((location) => (
            <option key={location.id} value={location.id}>
              {location.name}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      {statusList && (
        <Form.Group controlId="formBasicCheckbox">
          {allDangers?.map((danger) => (
            <Form.Check
              key={danger.id}
              type="checkbox"
              label={danger.name}
              checked={contextDangers?.some((el) => el.id === danger.id)}
              //   onChange={(e) => changeHandler(location.id, e.target.checked)}
            />
          ))}
        </Form.Group>
      )}
    </Form>
  );
}
