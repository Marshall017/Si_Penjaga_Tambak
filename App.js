import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import LoginPage from './components/screens/loginPage';
import beranda from './components/screens/beranda';
import alarm from './components/screens/alarmSetting';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
              name="alarm"
              component={alarm}
              options={{ headerShown: false}}
          />    
 


        <Stack.Screen
              name="beranda"
              component={beranda}
              options={{ headerShown: false}}
          />    
 

        <Stack.Screen
              name="login"
              component={LoginPage}
              options={{ headerShown: false}}
          /> 


      </Stack.Navigator>
    </NavigationContainer>
  );
}
