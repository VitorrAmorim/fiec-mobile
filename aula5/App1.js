import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

class App extends Component {
  //Inicializando o state
  constructor(props) {
    super(props)
    this.state = {
      contador: 0
    };
  }

  incrementar = () => {
    this.setState({
      contador: this.state.contador + 1
    });
  }

  decrementar = () => {
    this.setState({
      contador: this.state.contador - 1
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.texto}>Contador: {this.state.contador}</Text>

        <View style={styles.botoes}>
          <Button
            title='+'
            onPress={this.incrementar} />
          <Button
            title='-'
            onPress={this.decrementar} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    fontSize: 24,
    marginBottom: 20,
  },

  botoes: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-between',
  }
})