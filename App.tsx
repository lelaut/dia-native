import "react-native-gesture-handler";

import React from "react";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import theme from "./src/theme";
import MainNavigation from "./src/screens";

export default function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <MainNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
