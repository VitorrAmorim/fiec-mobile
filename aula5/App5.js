import React, { useState } from 'react';
import { View, Text, Buttom, StyleSheet } from 'react-native';

//em componentes funcionais nao precisa usar this
const App = () => {
    //Declaração do state
    const [contador, setContador] = useState(0);
    // estado/ usa contador

    const incrementar = () => {
        setContador(contado + 1);
    };

    const decrementar = () => {
        setContador(contador - 1);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.texto}>Contador: {contador}</Text>

            <View style={styles.botoes}>
                <Button
                    title='+'
                    onPress={incrementar} />
                <Button
                    title='-'
                    onPress={decrementar} />
            </View>
        </View>
    )
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