import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import { Searchbar } from "react-native-paper";

import BrowseTabs from "../components/BrowseTabs";
import Logo from "../components/Logo";
import PodcastList from "../components/PodcastList";

const BrowsePodcast = () => {
  return (
    <View style={styles.container}>
        <ScrollView
          style={styles.scrollViewStyle}
          contentContainerStyle={styles.scrollViewContentContainerStyle}
        >
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
        </ScrollView>
      <BrowseTabs />
      <PodcastList />
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
