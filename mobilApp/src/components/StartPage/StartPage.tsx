import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../Images/surv.png';

export default function StartPage() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SURVIVORS</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Enter" onPress={() => navigation.navigate('Country')} color="#228B22" />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  buttonContainer: {
    marginBottom: 50,
    marginHorizontal: 50,
    color: 'white'
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#F5DEB3',
  },
});




