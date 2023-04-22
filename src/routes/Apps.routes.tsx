import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { Welcome } from "../global/pages/welcome";
import { Home } from "../global/pages/Home";
import { About } from "../global/pages/About";

const Stack = createNativeStackNavigator();

export const AppsRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Welcome" component={Welcome} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};
