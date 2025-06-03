import React, { createContext, useState, useEffect, useContext } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage'

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        AsyncStorage.getItem('user').then(data => {
            if (data) setUser(JSON.parse(data));
        });
    }, []);

    const login = async (username) => {
        const userData = { name: username };
        setUser(userData);
        await AsyncStorage.setItem('user');
    };

    const logout = async () => {
        setUser(null);
        await AsyncStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(useContext);