import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const Logo = ({ imageStyle, titleStyle }) => {
  return (
    <View style={styles.logo}>
      <Image
        style={imageStyle}
        source={require("../assets/images/project_logo.svg")}
      />
      <Text style={titleStyle}>pcast</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logo: {
    flexDirection: "row",
    marginLeft: 10,
    margin: 18,
  },
});

export default Logo;
