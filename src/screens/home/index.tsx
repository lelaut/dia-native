import * as React from "react";
import { Center, Button } from "native-base";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import DailyGoals from "./daily-goals";
import YearGoals from "./year-goals";
import DiaryForm from "./diary-form";

function Home({ navigation }: any) {
  return (
    <Center flex={1}>
      <Text>Home Screen</Text>
      <Button onPress={() => navigation.navigate("DailyGoals")}>
        Go to Daily Goals
      </Button>
      <Button onPress={() => navigation.navigate("YearGoals")}>
        Go to Year Goals
      </Button>
      <Button onPress={() => navigation.navigate("DiaryForm")}>
        Go to Diary Form
      </Button>
    </Center>
  );
}

const Stack = createNativeStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DailyGoals"
        component={DailyGoals}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="YearGoals"
        component={YearGoals}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DiaryForm"
        component={DiaryForm}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
