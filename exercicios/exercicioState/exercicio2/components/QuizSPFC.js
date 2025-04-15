import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

class QuizSPFC extends React.Component {
  constructor(props) {
    super(props);
    
    this.perguntas = [
      {
        pergunta: "Em que ano o SPFC foi fundado?",
        opcoes: ["1930", "1935", "1939"],
        resposta: "1935"
      },
      {
        pergunta: "Quantos títulos brasileiros o SPFC tem?",
        opcoes: ["6", "8", "10"],
        resposta: "6"
      },
      {
        pergunta: "Qual é o estádio do SPFC?",
        opcoes: ["Morumbi", "Pacaembu", "Allianz Parque"],
        resposta: "Morumbi"
      }
    ];
    
    this.state = {
      perguntaAtual: 0,
      pontuacao: 0,
      respostaSelecionada: null
    };
  }

  verificarResposta = (resposta) => {
    const acertou = resposta === this.perguntas[this.state.perguntaAtual].resposta;
    this.setState({
      respostaSelecionada: resposta,
      pontuacao: acertou ? this.state.pontuacao + 1 : this.state.pontuacao
    });
  };

  proximaPergunta = () => {
    this.setState({
      perguntaAtual: this.state.perguntaAtual + 1,
      respostaSelecionada: null
    });
  };

  reiniciarQuiz = () => {
    this.setState({
      perguntaAtual: 0,
      pontuacao: 0,
      respostaSelecionada: null
    });
  };

  render() {
    const { perguntaAtual, respostaSelecionada, pontuacao } = this.state;
    
    if (perguntaAtual >= this.perguntas.length) {
      return (
        <View style={styles.containerResultado}>
          <Text style={styles.tituloResultado}>Quiz Concluído!</Text>
          <Text style={styles.pontuacao}>Você acertou {pontuacao} de 3</Text>
          <View style={styles.botaoReiniciar}>
            <Button 
              title="Jogar Novamente" 
              onPress={this.reiniciarQuiz}
              color="#000000"
            />
          </View>
        </View>
      );
    }
    
    const pergunta = this.perguntas[perguntaAtual];
    
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>QUIZ SPFC</Text>
        <Text style={styles.pergunta}>{pergunta.pergunta}</Text>
        
        {pergunta.opcoes.map((opcao, index) => (
          <View key={index} style={styles.botaoContainer}>
            <Button
              title={opcao}
              onPress={() => this.verificarResposta(opcao)}
              color={
                respostaSelecionada === opcao 
                  ? opcao === pergunta.resposta ? '#4CAF50' : '#F44336' 
                  : '#000000'
              }
            />
          </View>
        ))}
        
        {respostaSelecionada && (
          <View style={styles.botaoProximo}>
            <Button
              title="Próxima →"
              onPress={this.proximaPergunta}
              color="#FF0000"
            />
          </View>
        )}
      </View>
    );
  }
}

// Estilo com as cores do SPFC (vermelho, preto e branco)
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },
  containerResultado: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000'
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#FF0000',
    marginBottom: 30
  },
  tituloResultado: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 20
  },
  pergunta: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#000000'
  },
  pontuacao: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 30,
    textAlign: 'center'
  },
  botaoContainer: {
    marginVertical: 5
  },
  botaoProximo: {
    marginTop: 20,
    backgroundColor: '#000000',
    borderRadius: 5
  },
  botaoReiniciar: {
    marginTop: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: '60%',
    borderWidth: 1,
    borderColor: '#000000'
  }
});

export default QuizSPFC;