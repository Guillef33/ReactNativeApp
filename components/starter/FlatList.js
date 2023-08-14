import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";

function List() {
  const [people, setPeople] = useState([
    { name: "Shaun", id: "1" },
    { name: "Cacho", id: "2" },
    { name: "Pepe", id: "3" },
    { name: "Nestor", id: "4" },
  ]);

  const pressHandler = (id) => {
    console.log(id);
    setPeople((prevPeople) => {
      return prevPeople.filter((person) => person.id != id);
    });
  };

  return (
    <View style={styles.container}>
      <FlatList
        numColumns={2}
        keyExtractor={(item) => item.id}
        data={people}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item.id)}>
            <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingTop: 40,
    paddingHorizontal: 20,
  },
  item: {
    marginTop: 24,
    padding: 30,
    fontSize: 24,
    backgroundColor: "pink",
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default List;
