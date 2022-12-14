import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.boldText}>Hello Eslam !</Text>
            </View>
            <View style={styles.body}>
                <Text style={styles.boldText}>Hello Eslam !</Text>
                <Text style={styles.boldText}>Hello Eslam !</Text>
                <Text style={styles.boldText}>Hello Eslam !</Text>
                <Text style={styles.boldText}>Hello <Text style={styles.inside}>Mr.</Text> Eslam !</Text>
                <Text style={styles.body.textColor}>Hello Eslam !</Text>

            </View>
            <StatusBar style="auto"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    }, header: {
        backgroundColor: 'pink',
        padding: 20
    },
    boldText: {
        fontWeight: 'bold',
    },
    body: {
        backgroundColor: 'yellow',
        padding: 20,
        fontWeight: "bold",
        color: 'blue'
        , textColor: {
            color: 'blue'
        }
    }, inside: {
        backgroundColor: 'red',
        padding:5,
        margin:10
    }
});
