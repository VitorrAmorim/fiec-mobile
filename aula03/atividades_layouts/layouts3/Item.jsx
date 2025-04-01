import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Item extends Component {
  render() {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{this.props.label}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: "gray",
    padding: 40,
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  itemText: {
    color: "#fff",
    fontSize: 16,
  },
});

export default Item;
