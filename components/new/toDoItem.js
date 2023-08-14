import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function toDoItem({ item, pressHandler }) {
  return (
    <View>
      <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <Text style={styles.item}>{item.text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderColor: "black",
    marginTop: 40,
    borderStyle: "dashed",
    borderWidth: 1,
  },
});

export default toDoItem;
