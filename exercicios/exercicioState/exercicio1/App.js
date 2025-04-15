import React from 'react';
import { View, StyleSheet } from 'react-native';
import RelogioDigital from './components/RelogioDigital';

const App = () => {
  return (
      <View style={styles.container}>
          <RelogioDigital />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: "#f0f0f0",
      justifyContent: "center",
      alignItems: "center",
  },
});

export default App;
