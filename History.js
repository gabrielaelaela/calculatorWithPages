import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({route}) {
    return (
        <View style={styles.container}>
            <Text style={{fontWeight: "bold"}}>History: </Text>
            <FlatList data={route.params.history.history} renderItem={({item}) => <Text>{item.key}</Text>}
                      keyExtractor={(item, index) => index.toString()} scrollEnabled={true} />
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
    }
});