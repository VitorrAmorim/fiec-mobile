import { createDrawerNavigator } from "@react-navigation/drawer";
import { BottomTabNavigator } from './BottomTabNavigator';
import SettingsScreen from '';

const drawer = createDrawerNavigator();

export const AppNavigator = () => (
    <Drawer.Navigator>
        <Drawer.Screen name='MainTabs' component={BottomTabNavigator} options={{title: 'Inicio'}}></Drawer.Screen>
        <Drawer.Screen name='Settings' component={SettingsScreen}></Drawer.Screen>
    </Drawer.Navigator>
);