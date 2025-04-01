import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const Desafio1 = () => {
  return (
    <View style={styles.card}>
      <Image
        style={styles.image}
        source={{ uri: 'https://via.placeholder.com/300' }}
      />
      <Text style={styles.title}>Título do Card</Text>
      <Text style={styles.description}>Descrição do Card</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: "#FFB347",
    borderRadius: 8,
    padding: 10,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default Desafio1;
