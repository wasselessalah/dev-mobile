import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { purchasesadd, purchasesreduce } from "../store/productsSlice";

const CartListItem = ({ cartItem }) => {
  const dispatch = useDispatch();

  // Functions to increase and decrease quantity
  const increaseQuantity = () => {
    dispatch(purchasesadd(cartItem)); // Add the same product
  };

  const decreaseQuantity = () => {
    dispatch(purchasesreduce(cartItem.id)); // Decrease by product ID
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: cartItem.image }} style={styles.image} />

      <View style={styles.contentContainer}>
        <Text style={styles.name}>{cartItem.name}</Text>
        <Text style={styles.size}>Size: {cartItem.size || "N/A"}</Text>

        <View style={styles.footer}>
          <Feather
            onPress={decreaseQuantity}
            name="minus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.quantity}>{cartItem.quantity}</Text>
          <Feather
            onPress={increaseQuantity}
            name="plus-circle"
            size={24}
            color="gray"
          />
          <Text style={styles.itemTotal}>
            ${cartItem.price * cartItem.quantity}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    backgroundColor: "#f9f9f9",
    marginBottom: 10,
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contentContainer: {
    flex: 1,
    marginLeft: 10,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    marginBottom: 4,
  },
  size: {
    fontSize: 14,
    color: "gray",
    marginBottom: 8,
  },
  quantity: {
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 16,
    color: "gray",
  },
  footer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: "auto",
  },
  itemTotal: {
    marginLeft: "auto",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default CartListItem;
