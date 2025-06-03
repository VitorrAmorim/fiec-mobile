import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.details}>Preço: R$ {product.price.toFixed(2)}</Text>
        <Text style={styles.details}>Quantidade: {product.quantity}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity 
          style={[styles.button, styles.editButton]} 
          onPress={() => onEdit(product)}
        >
          <Text style={styles.buttonText}>Editar</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.deleteButton]} 
          onPress={() => onDelete(product.id)}
        >
          <Text style={styles.buttonText}>Excluir</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    elevation: 2,
  },
  infoContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  details: {
    fontSize: 14,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    padding: 8,
    borderRadius: 4,
    marginLeft: 8,
    minWidth: 60,
    alignItems: 'center',
  },
  editButton: {
    backgroundColor: '#f39c12',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
  },
  buttonText: {
    color: 'white',
    fontSize: 12,
  },
});

export default ProductItem;