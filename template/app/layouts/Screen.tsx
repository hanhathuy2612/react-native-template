import React, {PropsWithChildren} from "react";
import {SafeAreaView, StatusBar, ViewStyle} from "react-native";

type ScreenProps = PropsWithChildren<{}>
const Screen = ({children}: ScreenProps) => {
  return (
    <SafeAreaView style={$container}>
      <StatusBar/>
      {children}
    </SafeAreaView>
  );
};

const $container: ViewStyle = {};

export default Screen;
