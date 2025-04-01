import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Content() {
  return (
    <View style={styles.content}>
      <Text style={styles.contentText}>Conteúdo Principal</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    flex: 1,              
    backgroundColor: "blue",
    justifyContent: "center", 
  },
  contentText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Content;
