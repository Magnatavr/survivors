import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import {
  deleteCheckboxDangerActionThunk,
  getAllCountryActionThunk,
  getAllDangerActionThunk,
  getAllDangersInLocationActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
  redactCheckboxDangerActionThunk,
} from '../../features/actions';
import type { CountryType, LocationType } from '../../types';

export default function AddDangerForm(): JSX.Element {
  const [statusList, setStatusList] = useState<boolean>(false);
  const [currLocation, setCurrLocation] = useState<number | null>(null);
  const [selectedCountry, setSelectedCountry] = useState<CountryType | null>(
    null,
  );
  const [selectedLocation, setSelectedLocation] = useState<LocationType | null>(
    null,
  );

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
    const selectedCountryId = e.target.value;
    const selectCountry = allCountry?.find(
      (country) => country.id === Number(selectedCountryId),
    );
    setSelectedCountry(selectCountry || null);
    dispatch(getAllLocationsInCountryActionThunk(e.target.value)).catch(
      () => null,
    );
    setStatusList(false);
  };

  const handleSwitchLocation = (
    e: React.ChangeEvent<HTMLSelectElement>,
  ): void => {
    const selectedLocatos: LocationType = JSON.parse(e.target.value);
    setSelectedLocation(selectedLocatos);
    setCurrLocation(Number(selectedLocatos.id));
    dispatch(
      getAllDangersInLocationActionThunk({
        locationId: Number(selectedLocatos.id),
        currCountry: selectedCountry?.id || null,
      }),
    ).catch(() => null);
    if (allLocation) {
      setStatusList(true);
    }
  };
  useEffect(() => {
    setSelectedLocation(null);
  }, [selectedCountry]);

  const contextLocations = useAppSelector((state) => state.itemData.locations);
  const contextDangers = useAppSelector((state) => state.itemData.dangers);

  const changeHandler = (checked: boolean, dangerId: number): void => {
    const countryId = selectedCountry?.id || null;
    const locationId = currLocation;
    if (checked) {
      dispatch(
        redactCheckboxDangerActionThunk({
          locationId,
          countryId,
          dangerId,
        }),
      );
    } else {
      dispatch(
        deleteCheckboxDangerActionThunk({
          locationId,
          countryId,
          dangerId,
        }),
      );
    }
  };

  return (
    <Form>
      <Form.Group controlId="formBasicSelect">
        <Form.Label>Выберите страну</Form.Label>
        <Form.Select
          aria-label="Default select example"
          onChange={handleSwitchCountry}
          name="id"
          value={selectedCountry?.id || 'Выбрать страну'}
        >
          <option disabled>Выбрать страну</option>
          {allCountry?.map((country) => (
            <option key={country.id} value={country.id}>
              {country.name}
            </option>
          ))}
        </Form.Select>
        {selectedCountry && (
          <>
            <Form.Label>Выберите локацию</Form.Label>
            <Form.Select
              aria-label="Default select example"
              onChange={handleSwitchLocation}
              name="id"
              value={
                selectedLocation
                  ? JSON.stringify(selectedLocation)
                  : 'Выбрать локацию'
              }
            >
              <option disabled>Выбрать локацию</option>
              {contextLocations?.map((location) => (
                <option key={location.id} value={JSON.stringify(location)}>
                  {location.name}
                </option>
              ))}
            </Form.Select>
          </>
        )}
      </Form.Group>
      {statusList && (
        <Form.Group controlId="formBasicCheckbox">
          {allDangers?.map((danger) => (
            <Form.Check
              key={danger.id}
              type="checkbox"
              label={danger.name}
              checked={contextDangers?.some((el) => el.id === danger.id)}
              onChange={(e) => changeHandler(e.target.checked, danger.id)}
            />
          ))}
        </Form.Group>
      )}
    </Form>
  );
}
