import React from 'react';
import { View } from 'react-native';
import Contador from './components/Contador';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <Contador />
    </View>
  );
}