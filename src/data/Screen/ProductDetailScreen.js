import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
  ScrollView,
  Pressable,
} from "react-native";
import products from "../products";
import { useRoute } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { purchasesadd } from "../../store/productsSlice";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const { productId } = route.params; //* Get productId passed from ProductsScreen
  const product = products.find((p) => p.id === productId); //* Find the product by ID
  const dispatch = useDispatch();

  //* Fetch purchases state (if needed)
  const purchases = useSelector((state) => state.purchases);

  const { width } = useWindowDimensions();

  //* Add product to purchases
  const addtopurchases = () => {
    dispatch(purchasesadd(product));
    console.log("item add seccess") //* Dispatch the action with the product as payload
  };

  return (
    <View>
      <ScrollView>
        {/* Image Slider */}
        <FlatList
          data={product.images}
          renderItem={({ item }) => (
            <Image source={{ uri: item }} style={{ width, aspectRatio: 1 }} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
        />
        <View style={{ padding: 20 }}>
          <Text style={styles.title}>{product.name}</Text>
          <Text style={styles.price}>${product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
      </ScrollView>

      {/* Add to Cart Button */}
      <Pressable onPress={addtopurchases} style={styles.button}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </Pressable>




      <View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginVertical: 10,
  },
  price: {
    fontWeight: "500",
    fontSize: 16,
    letterSpacing: 1.5,
  },
  description: {
    marginVertical: 10,
    fontSize: 14,
    lineHeight: 22,
    fontWeight: "300",
    paddingBottom:"100",
  },
  button: {
    position: "absolute",
    backgroundColor: "black",
    bottom: 30,
    width: "90%",
    alignSelf: "center",
    padding: 20,
    borderRadius: 100,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontWeight: "500",
    fontSize: 16,
  },
});

export default ProductDetailsScreen;
