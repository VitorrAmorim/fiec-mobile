import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Conteudo = () => (
  <View style={styles.square}>
    <Text style={styles.text}>conteudo</Text>
  </View>
);

const styles = StyleSheet.create({
  square: {
    width: 200,
    height: 200,
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Conteudo;
