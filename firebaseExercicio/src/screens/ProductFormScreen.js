import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import useProducts from '../hooks/useProducts';

const ProductFormScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { product } = route.params || {};
  
  const { addProduct, updateProduct } = useProducts();
  
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price.toString());
      setQuantity(product.quantity.toString());
    }
  }, [product]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!name.trim()) newErrors.name = 'Nome é obrigatório';
    if (!price.trim()) newErrors.price = 'Preço é obrigatório';
    if (isNaN(Number(price))) newErrors.price = 'Preço deve ser um número';
    if (!quantity.trim()) newErrors.quantity = 'Quantidade é obrigatória';
    if (isNaN(Number(quantity))) newErrors.quantity = 'Quantidade deve ser um número';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;
    
    const productData = {
      name,
      price: Number(price),
      quantity: Number(quantity),
    };

    try {
      if (product) {
        await updateProduct(product.id, productData);
        Alert.alert('Sucesso', 'Produto atualizado com sucesso!');
      } else {
        await addProduct(productData);
        Alert.alert('Sucesso', 'Produto cadastrado com sucesso!');
      }
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro ao salvar o produto');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.formGroup}>
        <Text style={styles.label}>Nome do Produto</Text>
        <TextInput
          style={[styles.input, errors.name && styles.inputError]}
          value={name}
          onChangeText={setName}
          placeholder="Digite o nome do produto"
        />
        {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Preço (R$)</Text>
        <TextInput
          style={[styles.input, errors.price && styles.inputError]}
          value={price}
          onChangeText={setPrice}
          placeholder="Digite o preço"
          keyboardType="numeric"
        />
        {errors.price && <Text style={styles.errorText}>{errors.price}</Text>}
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={[styles.input, errors.quantity && styles.inputError]}
          value={quantity}
          onChangeText={setQuantity}
          placeholder="Digite a quantidade"
          keyboardType="numeric"
        />
        {errors.quantity && <Text style={styles.errorText}>{errors.quantity}</Text>}
      </View>

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>
          {product ? 'Atualizar Produto' : 'Cadastrar Produto'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f5f5f5',
  },
  formGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: 'white',
    padding: 12,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  errorText: {
    color: '#e74c3c',
    fontSize: 12,
    marginTop: 4,
  },
  submitButton: {
    backgroundColor: '#2ecc71',
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
    marginTop: 16,
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default ProductFormScreen;