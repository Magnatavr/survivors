import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableHighlight,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import backgroundImage from '../Images/surv.png';

export default function StartPage() {
  const navigation = useNavigation();

  
  // useEffect(()=> {
    
    setTimeout(() => {
      navigation.navigate('Country')
    }, 5000);
  // },[])

  const handlePress = () => {

    navigation.navigate('Country');
  };


  return (

    <ImageBackground source={backgroundImage} style={styles.background}>
      <View>
        
        <TouchableHighlight onPress={() => handlePress()}>
          
          <View style={styles.titleContainer}>
          <Text style={styles.title}>SURVIVAL</Text>
            {/* <Text style={styles.title1}>Enter</Text> */}
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
  titleContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 0,
  },
  // buttonContainer: {
  //   marginBottom: 300,
  //   marginHorizontal: 100,
  // },
  title: {
    fontFamily: 'Arial',
    fontSize: 46,
    fontWeight: 'bold',
    color: '#F5DEB3',
  },
  title1: {
    fontFamily: 'Arial',
    fontSize: 26,
    fontWeight: 'bold',
    color: '#F5DEB3',
  },
});
