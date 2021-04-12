import React, { Component } from "react";
import CalenderScreen from "../CalenderScreen/index.js"
import LogoutScreen from "./Logout.js"

// React Navigation Module
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'

const Drawer = createDrawerNavigator();

function HomeScreenRouter() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="月間スケジュール">
        <Drawer.Screen name="月間スケジュール" component={CalenderScreen} />
        <Drawer.Screen name="ログアウト" component={LogoutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreenRouter;