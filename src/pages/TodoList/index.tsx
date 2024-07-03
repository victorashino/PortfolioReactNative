import React, { useState, useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import Header from '../../../components/todoListComponents/Header'
import Task from '../../../components/todoListComponents/Task'

interface Task {
  id: number
  title: string
  description: string
}

export default TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    loadTasks()
  }, []);

  const loadTasks = async () => {
    try {
      const tasksJson = await AsyncStorage.getItem('tasks')
      if (tasksJson !== null) {
        setTasks(JSON.parse(tasksJson))
      }
    } catch (error) {
      console.error('Failed to load tasks.', error)
    }
  }

  const saveTasks = async (tasks: Task[]) => {
    try {
      const tasksJson = JSON.stringify(tasks)
      await AsyncStorage.setItem('tasks', tasksJson)
    } catch (error) {
      console.error('Failed to save tasks.', error)
    }
  }

  const addTask = (title: string, description: string) => {
    const newTask = { id: Date.now(), title, description }
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    saveTasks(updatedTasks)
  };

  const deleteTask = (taskId: number) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId)
    setTasks(updatedTasks)
    saveTasks(updatedTasks)
  };

  return (
    <View style={styles.container}>
      <Header onAddTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Task
            title={item.title}
            description={item.description}
            onDelete={() => deleteTask(item.id)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});
