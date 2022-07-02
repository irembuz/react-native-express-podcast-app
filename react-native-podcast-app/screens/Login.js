import React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

const Login = () => {
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>pcast</Text>
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
    backgroundColor: "#FFFFFF",
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    marginBottom: 16,
  },
  contentContainer: {
    padding: 32,
  },
  input: {
    fontSize: 15,
    marginTop: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 6,
  },
  buttonsContainer: {
    backgroundColor: "#3369FF",
  },
});

export default Login;
