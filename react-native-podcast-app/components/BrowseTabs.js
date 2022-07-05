import React, { useState, useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const BrowseTabs = () => {
  const [tabs, setTabs] = useState([]);

  useEffect(() => {
    const initialValue = [
      {
        iconName: "library-music",
        text: "Categories",
      },
    ];
    setTabs([...initialValue]);
  }, []);

  useEffect(() => {
    console.log(tabs);
  }, [tabs]);

  return (
    <View>
      {tabs.map((item, index) => (
        <TouchableOpacity key={index} style={styles.browseTabs}>
          <View style={styles.tabs} onPress>
            <MaterialIcons name={item.iconName} size={24} color="#898F97" />
          </View>
          <Text style={styles.textTabs}>{item.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  browseTabs: {
    marginLeft: 24,
  },
  tabs: {
    width: 56,
    height: 56,
    backgroundColor: "#19232F",
    borderRadius: 28,
    justifyContent: "center",
    alignItems: "center",
  },
  tabsText: {
    marginLeft: 10,
    margin: 18,
  },
  textTabs: {
    color: "#898F97",
  },
});

export default BrowseTabs;
