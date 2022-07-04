import React from "react";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { TextInput } from "react-native-paper";
import { useNavigation } from "@react-navigation/core";

import Logo from "../components/Logo";

const Login = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Logo imageStyle={styles.logoImage} titleStyle={styles.logoTitle} />
        <Text style={styles.text}>Episodic series of digital audio</Text>
        <TextInput
          style={styles.input}
          placeholder="E-mail address"
          mode="outlined"
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
          mode="outlined"
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
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("BrowsePodcast")}
        >
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
  logoImage: {
    width: 58,
    height: 58,
  },
  logoTitle: {
    fontSize: 32,
    color: "#FFFFFF",
    fontWeight: "800",
    marginBottom: 16,
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
