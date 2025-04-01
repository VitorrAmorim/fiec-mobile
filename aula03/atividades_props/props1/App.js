
import React from "react";
import { View, StyleSheet } from "react-native";
import SaudacaoClasse from "./components/atividade1";

class App1 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SaudacaoClasse nome="VAI SÃO PAULO" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#C00",
  },
});

export default App1;
