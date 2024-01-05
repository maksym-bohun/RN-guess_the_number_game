import React from "react";
import { StyleSheet, Text } from "react-native";
import colors from "../../constants/colors";

const InstructionText = ({ children }) => {
  return <Text style={styles.instructionText}>{children}</Text>;
};

export default InstructionText;

const styles = StyleSheet.create({
  instructionText: {
    color: colors.accent500,
    fontSize: 24,
    fontFamily: "open-sans",
  },
});
