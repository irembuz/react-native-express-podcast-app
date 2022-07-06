import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  ImageBackground,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const PodcastList = () => {
  const [podcasts, setPodcasts] = useState([]);

  useEffect(() => {
    const initialState = [
      {
        imageSource: require("../assets/images/sample_background.svg"),
        title: "Tancidunt facilisis fermentum nec sed",
      },
      {
        imageSource: require("../assets/images/sample_background2.svg"),
        title: "Nulla leo dictum pharetra ultricies",
      },
    ];
    setPodcasts([...initialState]);
  }, []);

  return (
    <View>
      <Text style={styles.text}>Podcasts({podcasts.length})</Text>
      {podcasts.map((item, index) => (
        <TouchableOpacity key={index}>
          <ImageBackground
            source={item.imageSource}
            style={styles.imageBackground}
          />
          <Ionicons
            style={styles.icon}
            name="ios-logo-youtube"
            size={34}
            color="#FF334B"
          />
          <Text style={styles.title}>{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    color: "#898F97",
    fontSize: 16,
    marginTop: 40,
    marginLeft: 35,
    marginBottom: 20,
  },
  imageBackground: {
    height: 180,
    width: "90%",
    opacity: 0.8,
    marginBottom:30,
    marginLeft:35,
  },
  icon: {
    position: "absolute",
    bottom: 50,
    right: 80,
  },
  title: {
    width: "70%",
    marginLeft: 60,
    marginTop: 25,
    color: "white",
    fontSize: 23,
    position: "absolute",
  },
});

export default PodcastList;
