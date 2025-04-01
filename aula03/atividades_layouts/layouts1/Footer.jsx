import React from "react";
import { View, Text, StyleSheet } from "react-native";

function Footer() {
  return (
    <View style={styles.footer}>
      <Text style={styles.footerText}>Rodapé</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "green",
    padding: 20,
  },
  footerText: {
    color: "#fff",
    fontSize: 18,
    textAlign: "center",
  },
});

export default Footer;
