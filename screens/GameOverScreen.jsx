import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Title from "../components/ui/Title";
import colors from "../constants/colors";
import PrimaryButton from "../components/ui/PrimaryButton";

const GameOverScreen = ({ rounds, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title text="GAME OVER" />
      <View style={styles.imageContainer}>
        <Image
          source={require("../assets/images/success.png")}
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlightedText}>{rounds}</Text>{" "}
        rounds to guess the number{" "}
        <Text style={styles.highlightedText}>{userNumber}</Text>.
      </Text>
      <PrimaryButton onPress={onStartNewGame}>Start new game</PrimaryButton>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 200,
    borderWidth: 3,
    borderColor: "#fff",
    overflow: "hidden",
    marginVertical: 36,
  },
  image: {
    width: "100%",
    height: " 100%",
    objectFit: "cover",
  },
  summaryText: {
    fontFamily: "open-sans",
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
    marginBottom: 24,
  },
  highlightedText: {
    fontFamily: "open-sans-bold",
    color: colors.primary500,
  },
});

export default GameOverScreen;
