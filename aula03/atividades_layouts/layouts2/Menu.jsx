import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Menu extends Component {
  render() {
    return (
      <View style={styles.menu}>
        <Text style={styles.menuText}>Menu</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: "gray",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  menuText: {
    color: "#fff",
    fontSize: 18,
  },
});

export default Menu;
