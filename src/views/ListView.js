import React, { useRef, useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useAppContext } from "../context/AppContext";
import ListStyle from "./Styles/ListStyle";
import styles from "./Styles/MainStyle";
import Task from "../components/Task/TaskCard"; // Import the Task component
import { AddListButton } from "../components/AddButton/AddButton";
import BackButton from "../components/BackButton/BackButton";

const ListView = ({ route, navigation }) => {
	const { board } = route.params;
	const { lists, tasks, moveTaskToList } = useAppContext();


	const [expandedListIds, setExpandedListIds] = useState([]);
	const listLayouts = useRef({}).current; // Stores layout data for lists

	const boardLists = lists.filter((list) => list.boardId === board.id);

	const toggleExpand = (listId) => {
		setExpandedListIds((prev) =>
			prev.includes(listId)
				? prev.filter((id) => id !== listId) // Remove if already expanded
				: [...prev, listId] // Add if not expanded
		);
	};


	const renderList = ({ item }) => {
		const isExpanded = expandedListIds.includes(item.id);
		const listTasks = tasks.filter((task) => task.listId === item.id);

		return (
			<TouchableOpacity
				style={ListStyle.listContainer}
				onPress={() => toggleExpand(item.id)}
				onLayout={(event) => {
					// Store the layout of the lis
					const layout = event.nativeEvent.layout;
					listLayouts[item.id] = layout;
					console.log(`List ${item.id} layout:`, layout);
				}}
			>
				<View style={ListStyle.listHeader}>
					<View style={[ListStyle.listColor, { backgroundColor: item.color }]} />
					<Text style={ListStyle.listTitle}>{item.name}</Text>
				</View>
				{isExpanded && (
					<View style={ListStyle.taskContainer}>
						{listTasks.length > 0 ? (
							listTasks.map((task) => (
								<Task
									key={task.id}
									tasks={task}
									boardLists={boardLists}
									boardId={board.id}
								/>
							))
						) : (
							<Text style={ListStyle.noTaskText}>No tasks available</Text>
						)}
					</View>
				)}
			</TouchableOpacity>
		);
	};

	return (
		<View style={styles.container}>
			<Text style={styles.greeting}>{board.name}</Text>
			<FlatList
				data={boardLists}
				renderItem={renderList}
				keyExtractor={(item, index) =>
					item?.id ? item.id.toString() : index.toString()
				}
				numColumns={1}
				contentContainerStyle={styles.boardContainer}
			/>
			<AddListButton onPress={() => console.log("Add List")} />
			<BackButton onPress={() => navigation.goBack()} />
		</View>
	);
};

export default ListView;
