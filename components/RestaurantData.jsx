import React from "react";
import { StyleSheet, Text, View, FlatList, Image } from "react-native";

export const RestaurantData = () => {
  const restaurantData = [
    {
      id: "1",
      name: "レストランA",
      cuisine: "イタリアン",
      rating: 4.5,
      image: require("../assets/restaurant1.jpg")
    },
    {
      id: "2",
      name: "レストランB",
      cuisine: "和食",
      rating: 4.2,
      image: require("../assets/restaurant1.jpg")
    },
    {
      id: "3",
      name: "レストランC",
      cuisine: "フレンチ",
      rating: 4.8,
      image: require("../assets/restaurant1.jpg")
    },
    {
      id: "4",
      name: "レストランD",
      cuisine: "中華",
      rating: 4.0,
      image: require("../assets/restaurant1.jpg")
    },
    {
      id: "5",
      name: "レストランE",
      cuisine: "和食",
      rating: 4.6,
      image: require("../assets/restaurant1.jpg")
    }
  ];

  const renderRestaurantCard = ({ item }) => (
    <View style={styles.restaurantCard}>
      <Image source={item.image} style={styles.restaurantImage} />
      <Text style={styles.restaurantName}>{item.name}</Text>
      <Text style={styles.restaurantCuisine}>{item.cuisine}</Text>
      <Text style={styles.restaurantRating}>Rating: {item.rating}</Text>
    </View>
  );

  return (
    <View style={styles.content}>
      <FlatList data={restaurantData} renderItem={renderRestaurantCard} keyExtractor={(item) => item.id} />
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    padding: 16
  },
  restaurantCard: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: "#cccccc",
    borderRadius: 8,
    padding: 16,
    backgroundColor: "#ffffff", // カードの背景色を白にする
    shadowColor: "#000000", // 影の色
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.1, // 影の透明度
    shadowRadius: 4, // 影のぼかしの強さ
    elevation: 2 // Android用の影の設定
  },
  restaurantImage: {
    width: "100%",
    height: 200,
    marginBottom: 8,
    borderRadius: 8
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4
  },
  restaurantCuisine: {
    fontSize: 16,
    marginBottom: 4
  },
  restaurantRating: {
    fontSize: 14,
    color: "#888888"
  }
});
