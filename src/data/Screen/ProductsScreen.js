import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Image, FlatList, Pressable } from "react-native";
import products from "../products";
const ProductsScreen = () => {
  const navigation=useNavigation();

  return (
    <FlatList
      data={products} //* Pass products from Redux store
      renderItem={({ item }) => (
        <Pressable
          onPress={() =>
            navigation.navigate("Product Detail", { productId: item.id })//* Pass product ID as a parameter
          }
          style={styles.itemContainer}
        >
          <Image source={{ uri: item.image }} style={styles.image} />
        </Pressable>
      )}
      numColumns={2}
      keyExtractor={(item) => item.id.toString()} //* Ensure each item has a unique key
    />
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default ProductsScreen;
