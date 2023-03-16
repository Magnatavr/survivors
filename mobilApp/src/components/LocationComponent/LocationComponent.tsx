import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { getLocationsThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../Images/india1.png';
import backgroundImage1 from '../Images/saudiarabia.png';
import backgroundImage2 from '../Images/russia.png'
import backgroundImage3 from '../Images/tibet.png'


import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  OnePost: { id: number; idCountry: number };
};

type OnePostRouteProp = RouteProp<RootStackParamList, 'OnePost'>;
export default function LocationComponent() {
  const locations = useAppSelector((state) => state.sliceData.location);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const route = useRoute<OnePostRouteProp>();

  const id = route.params?.id;

  let changer
  if(id === 1) {
    changer = backgroundImage;
  } else if (id === 2) {
    changer = backgroundImage1;
  } else if (id === 3) {
    changer = backgroundImage2;
  } else {
    changer = backgroundImage3;
  }


  const handlePress = (id: number, idCountry: number) => {
    navigation.navigate('Dangerous', { id, idCountry });
  };

  useEffect(() => {
    dispatch(getLocationsThunk(id)).catch((err) => console.log(err));
  }, []);

  return (
    <ImageBackground source={changer} style={styles.background}>
      <View style={styles.card2}>
        {locations.map((item) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => handlePress(item.id, id)}
            underlayColor="transparent"
          >
            <View style={styles.card}>
              <Text style={styles.title}>{item.name}</Text>
              {/* <Text>{item.description}</Text> */}
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
