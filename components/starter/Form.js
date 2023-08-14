import React from "react";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";

function Form({ name, setName, setAge }) {
  return (
    <View style={styles.container}>
      <Text>Enter Name</Text>
      <TextInput
        multiline
        keyboardType="default"
        style={styles.input}
        placeholder="Your name is..."
        onChangeText={(val) => {
          setName(val);
        }}
      />
      <Text>Enter Age</Text>
      <TextInput
        multiline
        keyboardType="number"
        style={styles.input}
        placeholder="Your age is..."
        onChangeText={(val) => {
          setAge(val);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});

export default Form;
