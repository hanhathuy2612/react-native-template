import React from "react";
import HomeScreen from "../screens/HomeScreen";
import LoginScreen from "../screens/LoginScreen";
import {RootStackParamList} from "./RootListParameters";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={"Home"}>
      <Stack.Screen name={"Home"} component={HomeScreen}/>
      <Stack.Screen name={"Login"} component={LoginScreen}/>
    </Stack.Navigator>
  );
};
export default AppNavigator;
