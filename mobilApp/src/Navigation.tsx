import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './components/HomePage/HomePage';
import PostPage from './components/PostPage/PostPage';
import AboutPage from './components/AboutPage/AboutPage';
import LocationComponent from './components/LocationComponent/LocationComponent';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Screen1" component={PostPage} />
        <Tab.Screen name="Screen2" component={AboutPage} />
        <Tab.Screen name="Screen3" component={LocationComponent} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;