import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import useProducts from '../hooks/useProducts';
import ProductItem from '../components/ProductItem';

const HomeScreen = () => {
  const navigation = useNavigation();
  const { products, loading, deleteProduct } = useProducts();

  const handleEdit = (product) => {
    navigation.navigate('ProductForm', { product });
  };

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Tem certeza que deseja excluir este produto?',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Excluir', onPress: () => deleteProduct(id) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('ProductForm')}
      >
        <Text style={styles.addButtonText}>Adicionar Produto</Text>
      </TouchableOpacity>

      {loading ? (
        <Text>Carregando...</Text>
      ) : products.length === 0 ? (
        <Text style={styles.emptyMessage}>Nenhum produto cadastrado</Text>
      ) : (
        <FlatList
          data={products}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ProductItem 
              product={item} 
              onEdit={handleEdit} 
              onDelete={handleDelete} 
            />
          )}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  addButton: {
    backgroundColor: '#3498db',
    padding: 12,
    borderRadius: 4,
    marginBottom: 16,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  emptyMessage: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#777',
  },
});

export default HomeScreen;