import React from "react";
import { View, StyleSheet } from "react-native";
import Conteudo from "./components/Conteudo";

const App4 = () => (
  <View style={styles.container}>
    <Conteudo />
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

export default App4;
