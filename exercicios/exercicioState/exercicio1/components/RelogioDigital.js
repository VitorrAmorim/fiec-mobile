import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";

const RelogioDigital = () => {
    const [hora, setHora] = useState("00:00:00");

    useEffect(() => {
        const agora = new Date();
        const horas = agora.getHours();
        const minutos = agora.getMinutes();
        const segundos = agora.getSeconds();

        const formatar = (numero) => {
            if (numero < 10) {
                return "0" + numero;
            }
            return numero;
        };

        setHora(
            `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`
        );
    }, []);

    return (
        <View style={styles.container}>
            <Text style={styles.relogio}>{hora}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333",
        padding: 20,
        borderRadius: 10,
    },
    relogio: {
        color: "#0F0",
        fontSize: 48,
        fontWeight: "bold",
    },
});

export default RelogioDigital;