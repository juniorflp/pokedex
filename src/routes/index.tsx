import { NavigationContainer } from "@react-navigation/native";
import * as React from "react";
import { AppsRoutes } from "./Apps.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppsRoutes />
    </NavigationContainer>
  );
};
