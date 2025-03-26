import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Rodape extends React.Component {
    render() {
        return (
            <View style={styles.rodape}>
                <Text style={styles.texto}>2025 São Paulo Futebol Clube</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rodape: {
        backgroundColor: "#000",
        padding: 15,
        width: "100%",
        alignItems: "center",
        position: "absolute",
        bottom: 0,
    },
    texto: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});
