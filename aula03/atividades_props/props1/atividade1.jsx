import React, { Component } from "react";
import { View, Text } from "react-native";

class SaudacaoClasse extends Component {
  render() {
    return (
      <View>
        <Text>Olá, {this.props.nome}!</Text>
      </View>
    );
  }
}

export default SaudacaoClasse;
