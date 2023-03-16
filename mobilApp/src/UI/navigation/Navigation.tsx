import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';


import StartPage from '../../components/StartPage/StartPage';
import CountryPage from '../../components/CountryPage/CountryPage';
import LocationComponent from '../../components/LocationComponent/LocationComponent';
import DangerosPage from '../../components/DangerosPage/DangerosPage';
import ArticalPage from '../../components/ArticlPage/ArticalPage';
import Icon from 'react-native-vector-icons/FontAwesome';
import FireMakingPage from '../../components/fireMakingPage/FireMakingPage';
import SunOrientationPage from '../../components/sunOrientationPage/SunOrientationPage';
import YewBerriesPage from '../../components/starOrintation/StarsOrintation';
import InfoPage from '../../components/infoPage/InfoPage';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const MainStack = () => (

     <Stack.Navigator>
        <Stack.Screen name="Start" component={StartPage} options={{ headerShown: false }}/>
        <Stack.Screen name="Country" component={CountryPage} options={{ headerShown: false }}/> 
        <Stack.Screen name="location" component={LocationComponent} /> 
        <Stack.Screen name="Dangeros" component={DangerosPage} /> 
        <Stack.Screen name="Artical" component={ArticalPage} /> 
        <Stack.Screen name="fireMaking" component={FireMakingPage} options={{ headerShown: false }}/>
        <Stack.Screen name="sunOrientation" component={SunOrientationPage} options={{ headerShown: false }}/>
        <Stack.Screen name="yewBerries" component={YewBerriesPage} options={{ headerShown: false }}/>
        
      </Stack.Navigator>

)



const MainTabStack = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Start') {
          iconName = focused ? 'th-list' : 'th-list';
        } else if (route.name === 'extro-information') {
          iconName = focused ? 'fire' : 'fire';
        }

        // You can return any component that you like here!
        return <Icon name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: 'tomato',
      tabBarInactiveTintColor: 'gray',
      tabBarStyle: [
        {
          display: 'flex',
        },
        null,
      ],
    })}
  >
    <Tab.Screen name="Start" component={MainStack} options={{ headerShown: false }} />
    <Tab.Screen name="extro-information" component={InfoPage} options={{ headerShown: false }}/>
  </Tab.Navigator>
);

const Navigation = () => {
  return (
    <NavigationContainer>
   <MainTabStack/>
    </NavigationContainer>
  );
};

export default Navigation;
