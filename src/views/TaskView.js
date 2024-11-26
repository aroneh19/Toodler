import React from "react";
import { View, Text, FlatList } from "react-native";
import { useAppContext } from "../context/AppContext";
import styles from "./Styles/MainStyle";
import { AddTaskButton } from "../components/AddButton/AddButton";
import BackButton from "../components/BackButton/BackButton";

const TaskView = ({ route, navigation }) => {
	const { list } = route.params;

	return (
		<View style={styles.container}>
			<FlatList
				data={list}
				keyExtractor={(item, index) => index.toString()}
				renderItem={({ item }) => <Text>{item}</Text>}
			/>

			<AddTaskButton onPress={() => setModalVisible(true)} />
			<BackButton onPress={() => navigation.goBack()} />
		</View>
	);
};

export default TaskView;
