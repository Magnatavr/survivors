import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { getDangerosThunk } from '../../features/actions/dangerosAction';

import backgroundImage from '../Images/phonepic.png';

type RootStackParamList = {
  OnePost: { id: number; idCountry: number };
};

type OnePostRouteProp = RouteProp<RootStackParamList, 'OnePost'>;
export default function DangerosPage() {
  const dangeros = useAppSelector((state) => state.sliceData.dangeros);
  const dispatch = useAppDispatch();

  const navigation = useNavigation();
  const route = useRoute<OnePostRouteProp>();

  const { id, idCountry } = route.params;

  const handlePress = (id) => {
    // Переход на следующую страницу с передачей параметра id
    navigation.navigate('Artical', { id });
  };

  useEffect(() => {
    dispatch(getDangerosThunk(route.params)).catch((err) => console.log(err));
  }, []);

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
          <View style={styles.card2}>
      {dangeros.map((item) => (
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
