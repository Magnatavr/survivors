import React from 'react'
import { useParams } from 'react-router-native';
import { StyleSheet, Text, View } from 'react-native';



import { RouteProp, useRoute } from '@react-navigation/native';

type RootStackParamList = {
  OnePost: { id: number };
};

type OnePostRouteProp = RouteProp<RootStackParamList, 'OnePost'>;
export default function HomePage() {
  const route = useRoute<OnePostRouteProp>();


  // const { id } = useParams();

  const  id  = route.params?.id;
   console.log(id)

  return (
    <Text>Значение параметра id:{id} </Text>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});