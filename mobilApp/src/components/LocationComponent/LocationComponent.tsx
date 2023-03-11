import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../features/reduxHooks';
import { selectLocation } from '../../features/slices';

const LocationComponent = () => {
    const navigation = useNavigation();
  const selectedLocation = useAppSelector(
    (state) => state.location.selectedLocation
  );
  const dispatch = useAppDispatch();

  const handleLocationPress = async () => {
    // try {
    //   const response = await axios.post('https://your-backend-url.com', {
    //     location,
    //   });
    //   console.log(response.data);
    //   // navigate to the next screen and pass the response data
    // } catch (error) {
    //   console.error(error);
    // }

    navigation.navigate('Screen1', { id: card.id });
    
    dispatch(selectLocation(location));
  };

  return (
    <View>
      {/* {locations.map((location:any) => ( */}
        <TouchableOpacity
        //   key={location.id}
          onPress={handleLocationPress}
        >
          <Text>рудд</Text>
        </TouchableOpacity>
      {/* ))} */}
    </View>
  );
};

export default LocationComponent;
