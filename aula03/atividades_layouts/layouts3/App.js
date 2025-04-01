import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import Item from "./components/Item";

class App3 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topRow}>
          <Item label="Item 1" />
          <Item label="Item 2" />
          <Item label="Item 3" />
        </View>

        <View style={styles.middleContainer}>
          <View style={styles.middleRow}>
            <Item label="Item 4" />
            <Item label="Item 5" />
            <Item label="Item 6" />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-around", 
    marginTop: 20,
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center", 
  },
  middleRow: {
    flexDirection: "row",
    justifyContent: "space-around", 
  },
});

export default App3;
