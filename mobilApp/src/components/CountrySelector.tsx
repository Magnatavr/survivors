import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

type CountrySelectorProps = {
  onSelectCountry: (country: number) => void;
};

const CountrySelector = ({ onSelectCountry }: CountrySelectorProps) => {
  const dispatch = useDispatch();
  const selectedCountry = useSelector((state) => state.selectedCountry);

  const handleSelectCountry = (country: number) => {
    dispatch({ type: 'SELECT_COUNTRY', payload: country });
    onSelectCountry(country);
  };

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>Select Country</Text>
      <View style={{ flexDirection: 'row' }}>
        <Button title="1" onPress={() => handleSelectCountry(1)} />
        <Button title="2" onPress={() => handleSelectCountry(2)} />
        <Button title="3" onPress={() => handleSelectCountry(3)} />
        <Button title="4" onPress={() => handleSelectCountry(4)} />
      </View>
      <Text>Selected country: {selectedCountry}</Text>
    </View>
  );
};

export default CountrySelector;
