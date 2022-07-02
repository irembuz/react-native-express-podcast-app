import React from "react";
import { Text, View, StyleSheet, TextInput, Button, Image } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.logo}>
          <Image
            style={styles.imageStyle}
            source={require("../assets/images/project_logo.svg")}
          />
          <Text style={styles.title}>pcast</Text>
        </View>
        <Text style={styles.text}>Episodic series of digital audio</Text>

        <TextInput style={styles.input} placeholder="E-mail address" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <View style={styles.buttonsContainer}>
          <Button title="Login" />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#09121C",
  },
  imageStyle: {
    width: 64,
    height: 64,
  },
  logo: {
    flexDirection: "row",
  },
  title: {
    fontSize: 36,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 16,
  },
  text: {
    fontSize: 24,
    fontWeight: "500",
    color: "#FFFFFF",
  },
  contentContainer: {
    padding: 32,
  },
  input: {
    backgroundColor: "#09121C",
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 16,
  },
  buttonsContainer: {},
});

export default Login;
