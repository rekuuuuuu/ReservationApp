import React from "react";
import { StyleSheet, Text, View } from "react-native";

export const AppBar = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>レストラン予約アプリ</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 100,
    paddingTop: 60,
    backgroundColor: "#FF6F61", // カラーはここで指定
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
    justifyContent: "center" // 追加
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#ffffff" // 文字色を白にする
  }
});
