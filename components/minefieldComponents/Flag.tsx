import { View, StyleSheet } from 'react-native'

export default props => {
    return (
        <View style={styles.container}>
            <View style={[styles.flagpole, props.bigger ? styles.flagpoleBigger : null]} />
            <View style={[styles.flag, props.bigger ? styles.flagBigger : null]} />
            <View style={[styles.base1, props.bigger ? styles.base1Bigger : null]} />
            <View style={[styles.base2, props.bigger ? styles.base2Bigger : null]} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 2,
    },
    flagpole: {
        position: "absolute",
        height: 16,
        width: 2,
        backgroundColor: "#222",
        marginLeft: 2,
        marginTop: -10
    },
    flag: {
        position: "absolute",
        height: 6,
        width: 8,
        backgroundColor: "#F22",
        marginLeft: -6,
        marginTop: -10
    },
    base1: {
        position: "absolute",
        height: 2,
        width: 8,
        backgroundColor: "#222",
        marginLeft: -1,
        marginTop: 5,
    },
    base2: {
        position: "absolute",
        height: 2,
        width: 12,
        backgroundColor: "#222",
        marginLeft: -3,
        marginTop: 7,
    },
    flagpoleBigger: {
        height: 28,
        width: 4,
        marginLeft: 16,
        marginTop: -19
    },
    flagBigger: {
        height: 10,
        width: 14,
        marginLeft: 3,
        marginTop: -19
    },
    base1Bigger: {
        height: 4,
        width: 12,
        marginTop: 5,
        marginLeft: 12,
    },
    base2Bigger: {
        height: 4,
        width: 20,
        marginLeft: 8,
        marginTop: 8,
    }
})