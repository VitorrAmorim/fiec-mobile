import React from "react";
import { Text, View, StyleSheet } from "react-native";
import OlaMundo from "./components/OlaMundo";
import { Titulo, Descricao } from "./components/sao-paulo";
import ListaFixa from "./components/lista-jogadores";
import Cabecalho from "./components/cabecalho";
import Rodape from "./components/rodape";

class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Cabecalho />
                <OlaMundo />
                <Titulo />
                <Descricao />
                <ListaFixa />
                <Rodape />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColours: "#fff",
    },
});

export default App;