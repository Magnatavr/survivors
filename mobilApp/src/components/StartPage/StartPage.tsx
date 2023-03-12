import React from 'react'
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartPage() {
  const navigation = useNavigation();

  return (
    <View>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>SURVIVOR</Text>
      <Button title="Enter" onPress={() => navigation.navigate('Country')} />
    </View>
  )
}
