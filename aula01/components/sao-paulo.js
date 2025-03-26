import React from "react";
import { Text, View, StyleSheet } from "react-native";

export class Titulo extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titulo}>São Paulo Futebol Clube</Text>
            </View>
        );
    }
}

export class Descricao extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.descricao}>Salve o tricolor paulista!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        margin: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#c00",
    },
    descricao: {
        fontSize: 16,
        color: "#000",
    },
});
