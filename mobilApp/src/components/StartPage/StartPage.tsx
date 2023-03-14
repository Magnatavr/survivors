import React, { useEffect } from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function StartPage() {
  const navigation = useNavigation();
  useEffect(()=> {
    
    setTimeout(() => {
      navigation.navigate('Country')
    }, 5000);
  },[])
  
  return (
    <>
    
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SURVIVOR</Text>
      <Button title="Enter" onPress={() => navigation.navigate('Country')} />
     
    </View>
   
    </>
  )
}
