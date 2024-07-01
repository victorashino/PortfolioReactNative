import { 
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonWithIcon(props) {

    return (
        <TouchableOpacity onPress={props.onPress} style={styles.button}>
            <View style={styles.iconContainer}>
                <Ionicons name={props.iconName} size={40} color="#000" />
            </View>
            <Text style={styles.textButton}>{props.label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#EFF",
        width: 150,
        height: 150,
        marginVertical: 10,
        marginHorizontal: 15,
        borderRadius: 10,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    textButton: {
        color: "#000",
        fontSize: 18,
        marginTop: 5,
    },
});
