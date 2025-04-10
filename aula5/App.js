import React, { Component } from "react";
import { View, Text, Button, StyleSheet, Switch } from "react-native";

class App extends Component {
  state = {
    ligado: false
  };

  toggleSwitch = () => {
    this.setState(prevState => ({
      ligado: !prevState.ligado
    }));
  };

  render() {
    return (
      <View style={StyleSheet.container}>
        <Text style={StyleSheet.texto}>Status:{this.state.ligado ? 'Ligado' : 'Desligado'}</Text>

        <Switch value={this.state.ligado} onValueChange={this.toggleSwitch}></Switch>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent
  }
})