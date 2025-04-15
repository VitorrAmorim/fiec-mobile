import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contador = () => {
  const [contagem, setContagem] = useState(0);

  const incrementar = () => {
    setContagem(contagem + 1);
  };

  const decrementar = () => {
    if (contagem > 0) {
      setContagem(contagem - 1);
    }
  };

  const resetar = () => {
    setContagem(0);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.contadorText}>{contagem}</Text>
      
      <View style={styles.botoesContainer}>
        <Button 
          title="+"
          onPress={incrementar}
          color="#4CAF50"
        />
        
        <Button
          title="-"
          onPress={decrementar}
          color="#F44336"
          disabled={contagem === 0}
        />
      </View>
      
      <View style={styles.botaoReset}>
        <Button
          title="Resetar"
          onPress={resetar}
          color="#607D8B"
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
    padding: 20,
    backgroundColor: '#F5F5F5'
  },
  contadorText: {
    fontSize: 72,
    fontWeight: 'bold',
    marginBottom: 40,
    color: '#333'
  },
  botoesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginBottom: 20
  },
  botaoReset: {
    width: '60%'
  }
});

export default Contador;