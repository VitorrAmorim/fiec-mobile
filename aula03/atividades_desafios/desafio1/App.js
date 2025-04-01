import React from "react";
import { View, StyleSheet } from "react-native";
import Desafio1 from "./components/Desafio1";

const AppDesafio1 = () => (
  <View style={styles.container}>
    <Desafio1 />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default AppDesafio1;
