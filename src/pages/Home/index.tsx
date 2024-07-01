import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ButtonNav from '../../../components/indexComponents/ButtonNav';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{
                    fontSize: 40,
                    color: "#EFF",
                }}>App Portfólio</Text>
                <Text style={{
                    fontSize: 30,
                    color: "#FEF",
                }}>React Native</Text>
            </View>
            <View style={styles.buttonContainer}>
                <ButtonNav onPress={() => navigation.navigate("FetchAddress")} iconName="location-sharp" label="Fetch Address" />
                <ButtonNav onPress={() => navigation.navigate("Calculator")} iconName="calculator" label="Calculator" />
                <ButtonNav onPress={() => navigation.navigate("Minefield")} iconName="game-controller" label="Minefield" />
                <ButtonNav onPress={() => navigation.navigate("TodoList")} iconName="create-sharp" label="To do list" />
                <ButtonNav onPress={() => navigation.navigate("DogsInfo")} iconName="information-circle" label="Dogs info" />
                <ButtonNav onPress={() => navigation.navigate("QRCodeScanner")} iconName="qr-code-sharp" label="QR Code Scanner" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EFF',
        height: "110%",
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: -50
    },
    header: {
        backgroundColor: "#FF4500",
        height: "50%",
        width: "140%",
        marginTop: -180,
        borderRadius: 360,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
