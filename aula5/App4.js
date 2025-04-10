import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet, FlatList } from "react-native";

class App extends Component {
    state = {
        terefas: [],
        novaTarefa: '',
    };

    adcionarTarefa = () => {
        if (this.state.novaTarefa.trim()) {
            this.setState(prevState => ({
                tarefas: [
                    ...prevState.tarefas,
                    prevState.novaTarefa
                ],
                novaTarefa: ''
            }))
        }
    }

    renderItem = ({ item }) => <Text style={styles.item}>{item}</Text>;

    render() {
        return (
            <View style={styles.container}>
                <TextInput style={styles.input} placeholder='Nova Tarefa' value={this.state.novaTarefa} onChange={novaTarefa => this.setState({ novaTarefa })} onSubmitEditing={this.adcionarTarefa}></TextInput>

                <Button title='Adcionar' onPress={this.adcionarTarefa}></Button>

                <FlatList data={this.state.tarefas} renderItem={this.renderItem} keyExtractor={(ite, index) => index.toString()}></FlatList>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center'
    },
    input: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10
    },
    item: {
        fontSize: 18,
        padding: 10,
        height: 44,
        borderBottomWidth: 1,
        borderBottomColor: '#ee'
    },
});

export default App;