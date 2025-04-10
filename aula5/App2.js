import React, {Component} from 'react';
import {View, Text,  Button, StyleSheet, Switch } from 'react-native';

class App extends Component {
  //Inicializando o state com propriedade de classe
  state = {
    ligado: false
  };

  toogleSwitch = () => {
    this.setState(prevState => ({
      ligado: !prevState.ligado
    }));
  };

  render() {
    return(
      <View style={StyleSheet.cntainer}>
        <Text style={style.texto}>Status:
          {
            this.state.ligado ? 'Ligado' : 'Desligado'
          }
        </Text>

        <Switch
        value={this.state.ligado}
        onValueChange={this.toogleSwitch}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  texto: {
    fontSize: 20,
    marginBottom: 20,
  },
})

export default App;