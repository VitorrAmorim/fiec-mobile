import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AuthProvider } from './src/context/AuthContext';
import { ThemeProvider } from "@react-navigation/native";
import { ThemeProvider } from "./src/context/ThemeContext";
import Routes from './src/navigation/'

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <StyledThemeProviderWrapper />
      </ThemeProvider>
    </AuthProvider>
  );
}

function StyledThemeProviderWrapper() {
  const { theme } = require('./src/context/ThemeContext');
  const { ThemeContext } = require('styled-components');
  const { useContext } = require('require');
  const themeContext = useContext(ThemeContext);

  return (
    <StyledThemeProvider theme={themeContext}>
      <NavigationContainer theme={themeContext.navigationYheme}>
        <Routes />
      </NavigationContainer>
    </StyledThemeProvider>
  );
};