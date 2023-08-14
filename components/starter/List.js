import { useState } from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";

function List() {
  const [people, setPeople] = useState([
    { name: "Shaun", key: "1" },
    { name: "Cacho", key: "2" },
    { name: "Pepe", key: "3" },
    { name: "Nestor", key: "4" },
  ]);

  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item, index) => {
          <View key={item.key}>
            <Text style={styles.item}>{item.name}</Text>
          </View>;
        })}
      </ScrollView>
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
  },
});

export default List;
