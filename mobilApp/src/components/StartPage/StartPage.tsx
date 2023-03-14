import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../Images/surv.png';

export default function StartPage() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>SURVIVAL</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* <Button title="Enter" onPress={() => navigation.navigate('Country')} color="#228B60" /> */}
        <Button style={{
          fontSize: 30,
          color: 'red'
        }} title="Enter" onPress={() => navigation.navigate('Country')} />
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
    paddingTop: 0,
  },
  buttonContainer: {
    marginBottom: 50,
    marginHorizontal: 100,
    color: 'black'
  },
  title: {
    fontFamily: 'Arial',
    fontSize: 46,
    fontWeight: 'normal',
    color: '#F5DEB3',
  },
  // buttonText: {
  //   fontSize: 30,
  // }
});




