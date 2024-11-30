import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import InputField from "../components/InputField/InputBox";
import styles from "../styles/NameInputStyle";

const NameInputView = ({ navigation }) => {
	const [name, setName] = useState("");

	const handleContinue = () => {
		if (name.trim()) {
			navigation.navigate("BoardView", { userName: name }); // Pass the name to BoardView
		} else {
			alert("Please enter your name");
		}
	};

	return (
		<View style={styles.container}>
			<Text style={styles.title}>What's your name?</Text>
			<InputField
				value={name}
				onChangeText={setName}
				placeholder="Enter your name"
			/>
			<TouchableOpacity style={styles.button} onPress={handleContinue}>
				<Text style={styles.buttonText}>Continue</Text>
			</TouchableOpacity>
		</View>
	);
};

export default NameInputView;
