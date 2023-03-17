import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import {
  deleteCheckboxLocationActionThunk,
  getAllCountryActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
  redactCheckboxLocationActionThunk,
} from '../../features/actions';



export default function AddLocForm(): JSX.Element {

  const [statusList, setStatusList] = useState<boolean>(false);
  const [currCountry, setCurrentCountry] = useState<number | null>(null);

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
    setCurrentCountry(Number(e.target.value));
    dispatch(getAllLocationsInCountryActionThunk(e.target.value)).catch(
      () => null,
    );
    if (allLocation) {
      setStatusList(true);
    }
  };

  const contextLocation = useAppSelector((state) => state.itemData.locations);

  const changeHandler = (locationId: number, checked: boolean): void => {
    if (checked) {
      dispatch(redactCheckboxLocationActionThunk({ locationId, currCountry }));
    } else {
      dispatch(deleteCheckboxLocationActionThunk({ locationId, currCountry }));
    }
  };

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
              checked={contextLocation?.some((el) => el.id === location.id)}
              onChange={(e) => changeHandler(location.id, e.target.checked)}
            />
          ))}
        </Form.Group>
      )}
    </Form>
  );
}
