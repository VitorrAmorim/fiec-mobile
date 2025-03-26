/*  import React from "react";
import { View } from "react-native";

import { HelloWorld } from "./components/HelloWorld";
import OlaMundo from "./components/OlaMundo";

class App extends React.Component {
  render() {
    return (

      <View style={styles.container}>
        <OlaMundo name="Vitor Amorim" />
      </View>
    );
  }
}

export default App; */

import { StyleSheet } from "react-native";
import DimensoesFixas from "./components/DimensoesFixas";

const App = () => {
  return (
    <DimensoesFixas />
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFF",
  },
});