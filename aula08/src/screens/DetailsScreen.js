function DetailsScreen({ route }) {
    const { id } = route.params;

    return (
        <View>
            <Text>Id do item : {id}</Text>
        </View>
    )
}