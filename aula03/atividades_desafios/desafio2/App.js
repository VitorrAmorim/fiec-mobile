import React from "react";
import { View, StyleSheet } from "react-native";
import Desafio2 from "./components/Desafio2";

const AppDesafio2 = () => (
  <View style={styles.container}>
    <Desafio2 />
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

export default AppDesafio2;
