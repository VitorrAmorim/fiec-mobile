import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Cabeçalho</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "red", 
    padding: 20,
  },
  headerText: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
});

export default Header;
