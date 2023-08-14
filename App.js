import { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import AddTodo from "./components/new/AddToDo";
import Header from "./components/new/header";
import ToDoItem from "./components/new/toDoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "but coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);

  const pressHandler = (id) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.key != id);
    });
  };

  const addTodo = () => {
    console.log("Todo added");
  };

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        {/* to Form   */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <ToDoItem pressHandler={pressHandler} item={item} />
            )}
          />
        </View>
      </View>
      <View>
        <AddTodo addTodo={addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  content: { padding: 40 },
  list: { marginTop: 20 },
});
