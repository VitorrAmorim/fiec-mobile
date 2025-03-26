import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default class Cabecalho extends React.Component {
    render() {
        return (
            <View style={styles.cabecalho}>
                <Text style={styles.texto}>Bem-vindo ao App do São Paulo FC</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cabecalho: {
        backgroundColor: "#C00",
        padding: 15,
        width: "100%",
        alignItems: "center",
    },
    texto: {
        color: "#FFF",
        fontSize: 18,
        fontWeight: "bold",
    },
});
