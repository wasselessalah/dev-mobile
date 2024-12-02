import React, { useState, useEffect } from "react";
import { FlatList, Text, StyleSheet, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import CartListItem from "../../components/CartListItem";
import { memoizedPurchases } from "../../store/selectors";


const ShoppingCart = () => {
  const [uniqueItems, setUniqueItems] = useState([]); //* Store only unique items



  //* Fetch purchases from Redux store
  const purchases = useSelector(memoizedPurchases);

  //* Update uniqueItems when purchases change
  useEffect(() => {
    const filteredItems = purchases.reduce((acc, item) => {
      const existingItem = acc.find((i) => i.id === item.id);
      if (!existingItem) {
        acc.push(item); //! Add item if not already in the array
      }
      return acc;
    }, []);
    setUniqueItems(filteredItems);
  }, [purchases]);

  return (
    <View style={styles.container}>
      {uniqueItems.length === 0 ? (
        <Text style={styles.emptyText}>Your cart is empty! 🛒</Text>
      ) : (
        <FlatList
          data={uniqueItems}
          renderItem={({ item }) => <CartListItem cartItem={item} />}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  emptyText: {
    textAlign: "center",
    fontSize: 18,
    color: "gray",
    marginTop: 50,
  },
});

export default ShoppingCart;
