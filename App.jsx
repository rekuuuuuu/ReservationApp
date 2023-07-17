import React from "react";
import { StyleSheet, View } from "react-native";

import { AppBar } from "./components/AppBar";
import { RestaurantDataScreen } from "./screens/RestaurantDataScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <RestaurantDataScreen></RestaurantDataScreen>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  }
});
