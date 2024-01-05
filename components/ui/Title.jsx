import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const Title = ({ text }) => {
  return <Text style={styles.title}>{text}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    padding: 12,
    borderWidth: 2,
    borderColor: "#fff",
  },
});
