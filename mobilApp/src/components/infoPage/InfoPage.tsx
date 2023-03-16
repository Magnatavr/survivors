import React, { useEffect } from 'react';
import { View, Text, TouchableHighlight, ImageBackground, StyleSheet } from 'react-native';
import { getCountryThunk } from '../../features/actions';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('../Images/forest.jpeg');

export default function InfoPage() {
  const navigation = useNavigation();

  const handlePress = (categoryName) => {
    navigation.navigate(categoryName);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => handlePress('fireMaking')} underlayColor="transparent">
          <View style={styles.card}>
            <Text style={styles.title}>Разведение огня</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight onPress={() => handlePress('sunOrientation')} underlayColor="transparent">
          <View style={styles.card}>
            <Text style={styles.title}>Ориентация по солнцу</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  underlayColor="transparent">
          <View style={styles.card}>
            <Text style={styles.title}>Ядовитые ягоды</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight  underlayColor="transparent">
          <View style={styles.card}>
            <Text style={styles.title}>Орентирование по звездам</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.card}>
            <Text style={styles.title}>Ночлег</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight underlayColor="transparent">
          <View style={styles.card}>
            <Text style={styles.title}>Следы животных</Text>
          </View>
        </TouchableHighlight>
        
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
  container: {
    flex: 1,
    alignItems: 'center',
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
});