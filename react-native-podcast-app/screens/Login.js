import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";

import Logo from "../components/Logo";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo />
        <Text style={styles.text}>Episodic series of digital audio</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
          mode='outlined'
          left={<TextInput.Icon name="email" color="#898F97" />}
          theme={{
            colors: {
              text: "#898F97",
              placeholder: "#898F97",
            },
          }}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          mode='outlined'
          secureTextEntry
          left={<TextInput.Icon name="key" color="#898F97" />}
          theme={{
            colors: {
              text: "#898F97",
              placeholder: "#898F97",
            },
          }}
        />
        {/* Login Button */}
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
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    height: 30,
    backgroundColor: "value",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 25,
    elevation: 3,
    backgroundColor: "#3369FF",
    marginTop: 24,
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
