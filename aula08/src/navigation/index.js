import React from "react";
import {useAuth} from '../context/AuthContext';
import AuthStack from './AuthStack';
import AppDrawer from './AppDrawer';

const Routes = () => {
    const {user} = useAuth();
    return user ? <AppDrawer></AppDrawer>
}