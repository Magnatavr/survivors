import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import HomePage from './components/HomePage/HomePage';
import PostPage from './components/PostPage/PostPage';
import AboutPage from './components/AboutPage/AboutPage';

const Tab = createBottomTabNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomePage} />
        <Tab.Screen name="Screen1" component={PostPage} />
        <Tab.Screen name="Screen2" component={AboutPage} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;