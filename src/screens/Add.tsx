import { Text, View, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export function Add (){
    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <Text style={styles.text}>Add</Text>
            </View>
        </SafeAreaProvider>
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