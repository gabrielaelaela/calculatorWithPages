import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import {useState} from "react";

let res = 0;

export default function Calculator({navigation}) {
    const [firstValue, setFirstValue] = useState("");
    const [secondValue, setSecondValue] = useState("");
    const [history, setHistory] = useState([]);

    const plus = () => {
        res = Number(firstValue) + Number(secondValue);
        let text = firstValue + " + " + secondValue + " = " + res;
        setHistory([...history, {key: text}])
    }

    const minus = () => {
        res = Number(firstValue) - Number(secondValue);
        let text = firstValue + " - " + secondValue + " = " + res;
        setHistory([...history, {key: text}])
    }

    return (
        <View style={styles.container}>
            <Text style={{marginBottom: 20}}>Result: {res}</Text>
            <TextInput style={{width: 100, borderColor: 'gray', borderWidth: 1}}
                       onChangeText={firstValue => setFirstValue(firstValue)} value={firstValue} />
            <TextInput style={{width: 100, borderColor: 'gray', borderWidth: 1}}
                       onChangeText={secondValue => setSecondValue(secondValue)} value={secondValue} />
            <View style={styles.flexContainer}>
                <Button onPress={plus} title="+" />
                <Button onPress={minus} title="-" />
                <Button title={"History"} onPress={() => {navigation.navigate('History', {history: {history}})}} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5
    },
    flexContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
        height: 5,
        marginTop: 20
    }
});