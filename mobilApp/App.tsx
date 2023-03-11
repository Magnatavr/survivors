import React from 'react';
import { View } from 'react-native';
import Main from './src/components/Main';
import CountrySelector from './src/components/CountrySelector';
import { useSelector } from 'react-redux';

const App = () => {
  const [showCountrySelector, setShowCountrySelector] = React.useState(false);

  const handlePressEnter = () => {
    setShowCountrySelector(true);
  };

  const handleSelectCountry = () => {
    setShowCountrySelector(false);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {showCountrySelector ? (
        <CountrySelector onSelectCountry={handleSelectCountry} />
      ) : (
        <Main onPressEnter={handlePressEnter} />
      )}
    </View>
  );
};

export default App;
