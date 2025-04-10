import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, Alert } from "react-native";

const App = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [erros, setErros] = useState({});

    const validarEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleSubmit = () => {
        const novosErros = {};

        if (!nome.trim()) {
            novosErros.nome = 'Nome é obrigatório';
        }

        if (!email.trim()) {
            novosErros.email = 'E-mail é obrigatório';
        } else if (!validarEmail(email)) {
            novosErros.email = 'E-mail inválido';
        }

        if (Object.keys(novosErros).length > 0) {
            setErros(novosErros);
            return;
        }

        setErros({});
        Alert.alert('Formulário enviado!', 'Nome: ${nome} \nEmail: ${email}', [{
            text: 'OK', onPress: () => { setNome(''); setEmail(''); }
        }]
        );
    };

    return (
        <View style={styles.container}>
            <TextInput style={[styles.input, erros.nome && styles.inputErro]} placeholder='E-mail' value={email} onChangeText={setEmail}></TextInput>
            {erros.email && <Text style={styles.textoErro}>{erros.email}</Text>}

        </View>
    );
}