import React from "react";
import { View } from "react-native";
import Card from "./components/Card.js";

const App = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Card 
        title="Card Destacado" 
        content="Esse card tem highlight, sombra e borda roxa!" 
        highlight 
        shadow 
        borderColor="purple" 
      />

      <Card 
        title="Card Padrão" 
        content="Esse card tem um estilo normal com borda verde." 
        borderColor="green"
      />
    </View>
  );
};

export default App;
