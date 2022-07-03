import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Logo = () => {
  return (
    <View style={styles.logo}>
      <Image
        style={styles.imageStyle}
        source={require("../assets/images/project_logo.svg")}
      />
      <Text style={styles.title}>pcast</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
  },
  imageStyle: {
    width: 64,
    height: 64,
  },
  title: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 16,
  },
});

export default Logo;
