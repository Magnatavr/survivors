import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { getCountryThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../Images/earth.png';

export default function CountryPage() {
  const countres = useAppSelector((state) => state.sliceData.countres);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();

  const handlePress = (id) => {
    // Переход на следующую страницу с передачей параметра id
    navigation.navigate('location', { id });
  };

  useEffect(() => {
    dispatch(getCountryThunk()).catch((err) => console.log(err));
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.card2}>
        {countres && 
        countres?.map((item) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => handlePress(item.id)}
            underlayColor="transparent"
          >
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
            </View>
          </TouchableHighlight>
        ))}
      </View>
    </ImageBackground>
  );
}
const styles = {
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#228B60',
    width: 250,
    borderRadius: 10,
    padding: 10,
    marginBottom: 30,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Arial',
    fontWeight: 'normal',
    fontSize: 20,
    marginBottom: 5,
    color: '#FFFFFF',
  },
  card2: {
    marginLeft: 70,
  },
};
