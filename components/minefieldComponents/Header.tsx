import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import Flag from './Flag'
import params from '../../src/pages/Minefield/params'

export default props => {
    return (
        <View style={styles.container}>
            <View style={styles.flagContainer}>
                <TouchableOpacity onPress={props.onFlagPress}
                    style={styles.flagButton}>
                        <Flag bigger />
                </TouchableOpacity>
                <Text style={styles.flagsLeft}>= {props.flagsLeft}</Text>
            </View>
            <TouchableOpacity style={styles.button}
                onPress={props.onNewGame}>
                <Text style={styles.buttonLabel}>Novo Jogo</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#EEE",
        alignItems: "center",
        justifyContent: "space-around",
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    flagContainer: {
        flexDirection: "row"
    },
    flagButton: {
        marginTop: 10,
        minWidth: 30
    },
    flagsLeft: {
        fontSize: 30,
        fontWeight: "bold",
        paddingTop: 5,
        marginLeft: 8,
        marginTop: -15
    },
    button: {
        backgroundColor: "#999",
        borderLeftColor: "#CCC",
        borderTopColor: "#CCC",
        borderRightColor: "#333",
        borderBottomColor: "#333",
        borderWidth: params.borderSize,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#EEE"
    }
})