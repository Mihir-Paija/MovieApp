import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

const Button = ({ Btntitle, onPress, disabled }) => {
  //   console.log("title", Btntitle);
  return (
    <TouchableOpacity
      style={[styles.button, disabled && styles.disabledButton]}
      onPress={disabled ? null : onPress}
      disabled={disabled}
    >
      <Text style={styles.buttonText}>{Btntitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1e90ff", // Custom background color
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
    // alignSelf: "center",
    // width: "32%",
  },
  buttonText: {
    color: "#fff", // Custom text color
    fontSize: 16,
    fontWeight: "bold",
  },
  disabledButton: {
    backgroundColor: "#ccc", // Color when button is disabled
  },
  disabledButtonText: {
    color: "#666", // Text color when button is disabled
  },
});
