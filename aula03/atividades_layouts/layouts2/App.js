import React from "react";
import { View, StyleSheet } from "react-native";
import Menu from "./components/Menu";
import Content from "./components/Content";

function App2() {
  return (
    <View style={styles.container}>
      <Menu />
      <Content />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row", 
  },
});

export default App2;
