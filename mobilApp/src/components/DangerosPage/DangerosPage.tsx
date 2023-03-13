import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

import { RouteProp, useRoute } from '@react-navigation/native';
import { getDangerosThunk } from '../../features/actions/dangerosAction';

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
    <View>
      {dangeros.map((item) => (
        <TouchableHighlight key={item.id} onPress={() => handlePress(item.id)}>
          <View style={styles.card}>
            <Text style={styles.title}>{item.name}</Text>
            {/* <Text>{item.description}</Text> */}
          </View>
        </TouchableHighlight>
      ))}
    </View>
  );
}
const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    elevation: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
};
