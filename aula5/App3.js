import React, { Component } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

class App extends Component {
  state = {
    nome: '',
    email: '',
    enviado: false
  };

  handleSubmit = () => {
    this.setState({
      enviado: true
    });
    //Aqui enviaria os dados pro banco de dados
  };

  render() {
    return (
      <View style={styles.container}>
        {!this.state.enviado ? (
          <>
            <TextInput
              style={styles.input}
              placeholder='Nome'
              value={this.state.nome}
              onChangeText={nome => this.setState({ nome })}
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              value={this.state.email}
              onChangeText={email => this.setState({ email })}
            />
            <Button
              title='Enviar'
              onPress={this.handleSubmit}
            />
          </>
        ) : (
          <Text style={styles.mensagem}>Obrigado, {this.state.nome}! Seu e-mail {(this.state.email)} foi registrado com sucesso!</Text>
        )}
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
  mensagem: {
    fontSize: 18,
    textAlign: 'center'
  },
});

export default App;