import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ProductFormScreen from '../screens/ProductFormScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ title: 'Lista de Produtos' }} 
      />
      <Stack.Screen 
        name="ProductForm" 
        component={ProductFormScreen} 
        options={{ title: 'Cadastro de Produto' }} 
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;