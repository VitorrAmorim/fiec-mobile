import React from "react";
import { View, StyleSheet } from "react-native";
import SaudacaoArrow from "./components/atividade3";

class App3 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <SaudacaoArrow nome="Roberto Carlos" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#779ECB",
  },
});

export default App3;
