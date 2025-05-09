import { NavigationContainer } from "@react-navigation/native";
import { AuthContext, AuthProvider } from './src/context/AuthContext';

import { AuthNavigator } from './src/navigation/AuthNavigator';
import { AppNavigator } from './src/navigation/AppNavigator';

const linking = {
  prefixes: ['myapp://', 'https:myapp.com'],
  config: {
    screens: {
      Login: 'login', // myapp://login

      Main: {
        path: 'main', // myapp: //main

        screens: {
          HomeTab: {
            path: 'home', // myapp://main

            screens: {
              Home: '', // Tela Inicial (myapp://main//home/details/123)
              Details: 'details/:id'
            },
          },
          ProfileTab: {
            path: 'profile', // myapp://main/profile

            screens: {
              Profile: '', // myapp://main/profile
            },
          },
        },
      },
      Settings: 'settings', // myapp://settings (via drawer)
    },
  },
};

export default function App() {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {({ isLoggedIn }) => (
          <NavigationContainer linking={linking}>
            {isLoggedIn ? <AppNavigator></AppNavigator> : <AuthNavigator></AuthNavigator>}
          </NavigationContainer>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}