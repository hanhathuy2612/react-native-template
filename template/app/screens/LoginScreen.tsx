import React from "react";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../navigator/RootListParameters";
import {Text} from "react-native";
import Screen from "../layouts/Screen";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen = (_: Props) => {
  return (
    <Screen>
      <Text>Login</Text>
    </Screen>
  );
};

export default LoginScreen;
