// App.jsx
import React from "react";
import { View, StyleSheet } from "react-native";


import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,               
    flexDirection: "column", 
  },
});
