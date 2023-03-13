import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import { getCountryThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';

export default function CountryPage() {
    const countres = useAppSelector((state)=> state.sliceData.countres)
    const dispatch = useAppDispatch()

    const navigation = useNavigation();

  const handlePress = (id) => {
    // Переход на следующую страницу с передачей параметра id
    navigation.navigate('location', { id });
  };

    useEffect(() => {
        dispatch(getCountryThunk()).catch((err) => console.log(err));
      },[]);
    
    return (
        <View>
          {countres.map((item) => (
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