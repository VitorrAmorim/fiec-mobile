import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../screens/ProfileScreen'
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createStackNavigator();

const HomeStackScreen = () => (
    <HomeStack.Navigator>
        <HomeStack.Screen name='Home' component={HomeScreen}/>
        <HomeStack.Screen name='Details' component={DetailsScreen} />
    </HomeStack.Navigator>
);

export const = createBottomTabNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen name='HomeTab' component={HomeScreen}></Tab.Screen>
        <Tab.Screen name='ProfileTab' component={ProfileScreen}></Tab.Screen>
    </Tab.Navigator>
);