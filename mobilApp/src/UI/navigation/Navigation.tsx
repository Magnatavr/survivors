import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import StartPage from '../../components/StartPage/StartPage';
import CountryPage from '../../components/CountryPage/CountryPage';
import LocationComponent from '../../components/LocationComponent/LocationComponent';
import DangerosPage from '../../components/DangerosPage/DangerosPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
     
     <Stack.Navigator>
        <Stack.Screen name="Start" component={StartPage} />

        <Stack.Screen name="Country" component={CountryPage} /> 
        <Stack.Screen name="location" component={LocationComponent} /> 
        <Stack.Screen name="Dangeros" component={DangerosPage} /> 


        
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
