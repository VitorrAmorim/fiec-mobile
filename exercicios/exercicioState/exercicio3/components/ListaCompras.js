import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';

class AmazonListaCompras extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      lista: []
    };
  }

  adicionarItem = () => {
    if (this.state.item.trim()) {
      this.setState(prevState => ({
        lista: [...prevState.lista, prevState.item],
        item: ''
      }));
    }
  };

  removerItem = (indexParaRemover) => {
    this.setState(prevState => ({
      lista: prevState.lista.filter((_, index) => index !== indexParaRemover)
    }));
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.titulo}>Amazon Lista</Text>
        </View>
        
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Adicione um item..."
            value={this.state.item}
            onChangeText={text => this.setState({ item: text })}
          />
          <Button
            title="+"
            onPress={this.adicionarItem}
            color="#FF9900"
          />
        </View>

        <FlatList
          data={this.state.lista}
          renderItem={({ item, index }) => (
            <View style={styles.itemContainer}>
              <Text style={styles.itemText}>• {item}</Text>
              <Button
                title="Remover"
                onPress={() => this.removerItem(index)}
                color="#FF0000"
              />
            </View>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#F3F3F3'
  },
  header: {
    backgroundColor: '#232F3E',
    padding: 15,
    marginBottom: 15,
    borderRadius: 5
  },
  titulo: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 15
  },
  input: {
    flex: 1,
    borderColor: '#FF9900',
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 3
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 12,
    marginBottom: 8,
    borderRadius: 3,
    borderLeftWidth: 4,
    borderLeftColor: '#FF9900'
  },
  itemText: {
    fontSize: 16,
    color: '#131A22'
  }
});

export default AmazonListaCompras;