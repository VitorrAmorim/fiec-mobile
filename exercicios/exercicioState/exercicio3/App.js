import React from 'react';
import { View } from 'react-native';
import ListaCompras from './components/ListaCompras';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <ListaCompras />
    </View>
  );
}