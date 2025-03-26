import React, { Component } from "react";

import { View, Text } from "react=native"

// Tradicional Function
/* export function HelloWorld(props) {
    return (
        <View>
            <Text>Ola</Text>
            <Text>{props.name}</Text>
        </View>
    )
} */

// Arrow Function
/* const HelloWorld = (props) => {
    return (
        <View>
            <Text>Ola</Text>
            <Text>{props.name}</Text>
        </View>
    )
} */

const HelloWorld = (props) => (
    <View>
        <Text>Ola</Text>
        <Text>{props.name}</Text>
    </View>
)

export default HelloWorld;