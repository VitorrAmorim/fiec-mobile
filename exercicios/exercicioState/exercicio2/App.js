import React from 'react';
import { View } from 'react-native';
import QuizSPFC from './components/QuizSPFC';

export default function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F5F5F5' }}>
      <QuizSPFC />
    </View>
  );
}