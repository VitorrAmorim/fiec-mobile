import React from "react";
import { View, Text } from "react-native";

function SaudacaoFuncao(props) {
  return (
    <View>
      <Text>Olá, {props.nome}!</Text>
    </View>
  );
}

export default SaudacaoFuncao;
