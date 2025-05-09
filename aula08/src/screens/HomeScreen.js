import { useLinkTo } from "@react-navigation/native";
import { Button } from "react-native";

function HomeScreen() {
    const linkTo = useLinkTo();

    return (
        <Button title='Ver detalhes do produto 42' onPress={() => linkTo('/main/details/42')} />
    )
}