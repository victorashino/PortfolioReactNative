import { View, StyleSheet, Text } from 'react-native';

export default function TodoList() {
  return (
    <View style={style.container}>
      <Text style={style.text}>TodoList</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EFF",
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  text: {
    fontSize: 24
  }
});
