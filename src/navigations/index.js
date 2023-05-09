import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaMenu from "../screens/Menu";
import TelaPerguntas from "../screens/Perguntas";

const Stack = createStackNavigator();

export const NavegacaoPrinciapl = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="telaPrincipal" component={TelaMenu} />
      <Stack.Screen name="perguntas" component={TelaPerguntas} />
    </Stack.Navigator>
  </NavigationContainer>
);
