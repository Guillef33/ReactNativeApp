import { useState } from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

function AddTodo({ item, addTodo }) {
  const [newtodo, setNewTodo] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add todo</Text>
      <TextInput
        multiline
        keyboardType="default"
        style={styles.input}
        placeholder="Your name is..."
        onChangeText={(val) => {
          setNewTodo(val);
        }}
      />
      <View style={styles.buttonContainer}>
        <Button title="add todo" onPress={addTodo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 250,
    height: 60,
  },
  buttonContainer: {
    color: "black",
    marginBottom: 20,
  },
});

export default AddTodo;
