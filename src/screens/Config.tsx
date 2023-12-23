import { Text, View, StyleSheet } from "react-native";

export function Config (){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Config</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121313',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#E2D8D8',
        fontSize: 20,
        fontWeight: 'bold'
    }
})