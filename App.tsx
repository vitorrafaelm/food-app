import React from "react";
import { ThemeProvider } from "styled-components";
import { StatusBar } from "react-native";
import theme from "./src/global/styles/theme";

import {
  useFonts,
  Montserrat_300Light,
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  Montserrat_500Medium,
} from "@expo-google-fonts/montserrat";

import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_500Medium,
  });

  if(fontsLoaded) {
    console.log('true');
  }

  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" />
      <Routes />
    </ThemeProvider>
  );
}
