import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import {  getLocationsThunk } from '../../features/actions';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { useNavigation } from '@react-navigation/native';


import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  OnePost: { id: number };
};

type OnePostRouteProp = RouteProp<RootStackParamList, 'OnePost'>;
export default function LocationComponent() {
    const locations = useAppSelector((state)=> state.sliceData.location)
    const dispatch = useAppDispatch()

    const navigation = useNavigation();
    const route = useRoute<OnePostRouteProp>();


  
    const  id  = route.params?.id;

  const handlePress = (id) => {
    // Переход на следующую страницу с передачей параметра id
    navigation.navigate('Dangeros', { id });
  };

    useEffect(() => {
        dispatch(getLocationsThunk(id)).catch((err) => console.log(err));
      },[]);
    
    return (
        <View>
          {locations.map((item) => (
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