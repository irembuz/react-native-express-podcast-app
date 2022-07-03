import React from "react";
import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";

import Logo from "../components/Logo";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo />
        <Text style={styles.text}>Episodic series of digital audio</Text>

        <TextInput style={styles.input} placeholder="E-mail address" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
        />
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </Pressable>
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
    borderRadius: 25,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#3369FF",
  },
  buttonText: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
});

export default Login;
