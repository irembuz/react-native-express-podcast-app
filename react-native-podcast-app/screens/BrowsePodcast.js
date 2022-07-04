import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Searchbar } from "react-native-paper";

import Logo from "../components/Logo";

const BrowsePodcast = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo imageStyle={styles.logoImage} titleStyle={styles.logoTitle} />
        <Text style={styles.text}>Browse</Text>
        <Searchbar
          style={styles.searchbar}
          placeholder="Search"
          theme={{
            colors: {
              text: "#898F97",
              placeholder: "#898F97",
            },
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09121C",
  },
  contentContainer: {
    padding: 32,
  },
  text: {
    fontSize: 48,
    fontWeight: "700",
    color: "#FFFFFF",
    margin: 12,
  },
  logoImage: {
    width: 36,
    height: 36,
  },
  logoTitle: {
    fontSize: 19,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 16,
  },
  searchbar: {
    backgroundColor: "#010304",
    borderRadius: 100,
    margin: 20,
  },
});

export default BrowsePodcast;
