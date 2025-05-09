import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { View } from "react-native-reanimated/lib/typescript/Animated";
import { Button } from "react-native";

export const ProfileScreen = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);

    if (!isLoggedIn) {
        navigation.navigate('Login');
        return null;
    }

    return (
        <View>
            <Text>Perfil do Usuário</Text>
            <Button title="Logout" onPress={logout}></Button>
        </View>
    );
};