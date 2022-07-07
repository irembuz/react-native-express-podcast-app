import React from "react";
import { StyleSheet, View, ImageBackground, Text } from "react-native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";

const PodcastScreenHeader = () => {
  return (
    <View>
      <ImageBackground
        source={require("../assets/images/podcast_background.svg")}
        style={styles.imageBackground}
      >
        <View style={styles.top}>
          <FontAwesome name="arrow-left" size={24} color="white" />
          <Ionicons name="menu" size={24} color="white" />
        </View>
        <Text style={styles.title}>About flow and our motivations</Text>
        <Text style={styles.speakers}>John Doe & Amanda Smith</Text>
        <View style={styles.icons}>
          <MaterialIcons style={styles.icon} name="rotate-left" size={24} />
          <Ionicons style={styles.pause} name="pause-circle" />
          <MaterialIcons style={styles.icon} name="rotate-right" />
        </View>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 22,
    marginTop: 58,
  },
  imageBackground: {
    flex: 1,
    height: "100%",
  },
  title: {
    color: "white",
    fontSize: 26,
    margin: "auto",
    marginBottom: 20,
    width:"60%"
  },
  speakers: {
    color: "#898F97",
    fontSize: 14,
    margin: "auto",
  },
  icons: {
    flexDirection: "row",
    margin: "auto",
  },
  icon: {
    color: "white",
    fontSize: 24,
    marginTop: 70,
    margin: 30,
  },
  pause: {
    margin: "auto",
    color: "#FF334B",
    fontSize: 54,
    marginTop: 50,
  },
});

export default PodcastScreenHeader;
