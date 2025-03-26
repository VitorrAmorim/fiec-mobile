import React from "react";
import { Text, View, StyleSheet } from "react-native";

//Do Lugano para baixo não aparece, o rodapé oculta eles
export default class ListaFixa extends React.Component {
    render() {
        return (
            <View style={styles.container}> 
                <Text style={styles.titulo}>Lista de Ídolos do SPFC</Text>
                <Text style={styles.item}>Rogério Ceni</Text>
                <Text style={styles.item}>Raí</Text>
                <Text style={styles.item}>Lugano</Text>
                <Text style={styles.item}>Luciano</Text>
                <Text style={styles.item}>Kaká</Text>
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
        fontSize: 20,
        fontWeight: "bold",
        color: "#C00",
        marginBottom: 10,
    },
    item: {
        fontSize: 16,
        color: "#000",
    },
});
