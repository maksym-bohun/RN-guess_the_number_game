import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "./PrimaryButton";

const InputContainer = ({ onConfirmNumber }) => {
  const [inputValue, setInputValue] = useState("");
  const confirmNumber = () => {
    if (inputValue !== "") {
      onConfirmNumber(+inputValue);
      setInputValue("");
    }
  };

  const inputChangeHandler = (val) => {
    setInputValue(val);
  };

  const resetHandler = () => {};

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.header}>Enter a Number</Text>
        <TextInput
          keyboardType="number-pad"
          style={styles.input}
          value={inputValue}
          onChangeText={inputChangeHandler}
        />
        <View style={styles.buttonsContainer}>
          <PrimaryButton text="Reset" pressHandler={resetHandler} />
          <PrimaryButton text="Confirm" pressHandler={confirmNumber} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 3,
    width: "80%",
  },
  inputContainer: {
    borderRadius: 10,
    padding: 20,
    backgroundColor: "#3B0220",
    flexDirection: "column",
    alignItems: "center",
    gap: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
    elevation: 4,
  },
  header: {
    textAlign: "center",
    fontSize: 28,
    color: "#D2B041",
  },
  input: {
    width: "20%",
    paddingVertical: 10,
    borderBottomColor: "#D2B041",
    borderBottomWidth: 2,
    color: "#D2B041",
    fontSize: 24,
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 10,
  },
  button: {
    backgroundColor: "#72053D",
    paddingVertical: 8,
    paddingHorizontal: 16,
    flex: 1,
    borderRadius: 20,
  },
  buttonText: {
    color: "orangered",
    textAlign: "center",
    fontSize: 20,
  },
  buttonPressed: {
    opacity: 0.5,
    borderWidth: 1,
    borderColor: "yellow",
  },
});

export default InputContainer;
