import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Content extends Component {
  render() {
    return (
      <View style={styles.content}>
        <Text style={styles.contentText}>Conteúdo Principal</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  content: {
    flex: 2,
    backgroundColor: "white",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    color: "#000",
    fontSize: 18,
  },
});

export default Content;
