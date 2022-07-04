import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

import Logo from "../components/Logo";

const BrowsePodcast = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo />
        <Text style={styles.text}>Browse</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09121C",
  },
  text: {
    fontSize: 48,
    fontWeight: "700",
    color: "#FFFFFF",
  },
});

export default BrowsePodcast;
