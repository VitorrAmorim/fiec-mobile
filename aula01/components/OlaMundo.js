import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class OlaMundo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.texto}>Olá Mundo!</Text>
                <Text style={styles.texto}>Bem vindos ao mundo do desenvolvimento mobile</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColours: "#fff",
    },
    texto: {
        color: "#ccc",

    }
})