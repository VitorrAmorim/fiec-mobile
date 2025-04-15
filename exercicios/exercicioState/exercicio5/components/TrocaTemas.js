import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const TrocaTema = () => {
  const [tema, setTema] = useState('claro');

  const temas = {
    claro: {
      background: '#FFFFFF',
      text: '#000000',
      button: '#007AFF',
      name: 'Claro'
    },
    escuro: {
      background: '#121212',
      text: '#FFFFFF',
      button: '#BB86FC',
      name: 'Escuro'
    }
  };

  const estiloAtual = temas[tema];

  return (
    <View style={[styles.container, { backgroundColor: estiloAtual.background }]}>
      <Text style={[styles.texto, { color: estiloAtual.text }]}>
        Tema Atual: {estiloAtual.name}
      </Text>
      
      <View style={styles.botoes}>
        <Button
          title="Tema Claro"
          onPress={() => setTema('claro')}
          color={estiloAtual.button}
        />
        
        <Button
          title="Tema Escuro"
          onPress={() => setTema('escuro')}
          color={estiloAtual.button}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  },
  texto: {
    fontSize: 24,
    marginBottom: 30,
    fontWeight: 'bold'
  },
  botoes: {
    width: '80%',
    gap: 10
  }
});

export default TrocaTema;