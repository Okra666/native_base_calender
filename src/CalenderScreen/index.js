import React, { Component } from "react";
import { NavigationContainer, useNavigation} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Calender_page from "./Calender.js"
import Contact_page from "./Connect.js"


const Stack = createStackNavigator();

function App() {

  return (

    <Stack.Navigator initialRouteName="Calender"
        screenOptions={{
            headerShown: false
        }}>
        <Stack.Screen name="Calender" component={Calender_page} />
        <Stack.Screen name="Contact" component={Contact_page} />
    </Stack.Navigator>
  );
}

export default App;