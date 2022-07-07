import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import PodcastScreenHeader from "../components/PodcastScreenHeader";

const Podcast = () => {
  return (
    <View style={styles.container}>
      <PodcastScreenHeader />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09121C",
  },
});

export default Podcast;
