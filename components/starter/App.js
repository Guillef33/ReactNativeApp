import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image, Button, TextInput } from "react-native";
import Form from "./components/Form";

export default function App() {
  const [name, setName] = useState("Nestor");
  const [age, setAge] = useState(30);

  const [person, setPerson] = useState({ name: "kricher", age: 40 });

  const clickHandler = () => {
    setName("Calogero");
    setPerson({ name: "pedro", age: 50 });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.boldText}>Yo no sabia que eras tan {name}</Text>
      <Text style={styles.boldText}>
        Siempre vamos con {person.name} y jugando fuerte con {person.age}
      </Text>
      <Form name={name} setName={setName} setAge={setAge} />
      <View style={styles.buttonContainer}>
        <Button title="update state" onPress={clickHandler} />
      </View>
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
  boldText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
  buttonContainer: {
    marginTop: 20,
  },
});
