import React from "react";
import { View, StyleSheet } from "react-native";
import SaudacaoFuncao from "./components/atividade2";

class App2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SaudacaoFuncao nome="Ben 10" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#77DD77",
  },
});

export default App2;
