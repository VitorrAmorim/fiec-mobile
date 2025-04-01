import React from "react";
import { View, Text } from "react-native";

const SaudacaoArrow = (props) => {
  return (
    <View>
      <Text>Olá, {props.nome}!</Text>
    </View>
  );
};

export default SaudacaoArrow;
