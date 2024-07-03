import { useState } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

interface HeaderProps {
    onAddTask: (title: string, description: string) => void;
}

export default Header = ({ onAddTask }: HeaderProps) => {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")

    const handleAddTask = () => {
        if (title && description) {
            onAddTask(title, description)
            setTitle("")
            setDescription("")
        }
    }

    return (
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="Título"
            value={title}
            onChangeText={setTitle}
            />
            <TextInput
            style={styles.input}
            placeholder="Descrição"
            value={description}
            onChangeText={setDescription}
            />
            <Button title="Adicionar" onPress={handleAddTask} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: '#f8f8f8',
      borderBottomWidth: 1,
      borderBottomColor: '#ddd',
      marginTop: 24,
    },
    input: {
      height: 40,
      borderColor: '#ccc',
      borderWidth: 1,
      marginBottom: 10,
      paddingHorizontal: 8,
      borderRadius: 5,
    },
  });