import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Navigation from './src/Navigation';
import { Provider } from 'react-redux'; 
import store from './src/redux/store';

export default function App() {
  return (
    <Provider store={store}> {/* оберните ваше приложение в провайдер */}
    <View style={styles.container}>
      <Navigation />
      <StatusBar style="auto" />
    </View>
  </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});