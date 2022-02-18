import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeStack from "./home";
import Archive from "./archive";
import Stats from "./stats";

const Drawer = createDrawerNavigator();

export default function MainNavigation() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="HomeStack"
        component={HomeStack}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Archive"
        component={Archive}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name="Stats"
        component={Stats}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
}
