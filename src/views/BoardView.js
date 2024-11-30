import React, { useState } from "react";
import { View, Text, FlatList, Alert } from "react-native";
import Board from "../components/BoardView/BoardCard";
import BackButton from "../components/BackButton/BackButton";
import { AddBoardButton } from "../components/AddButton/AddButton";
import { CustomModal } from "../components/Modal/Modal";

import styles from "../styles/MainStyle";
import { useAppContext } from "../context/AppContext";

const BoardView = ({ route, navigation }) => {
	const { boards, addBoard, deleteBoard, setBoards } = useAppContext();
	const { userName } = route.params || {};

	const [isModalVisible, setModalVisible] = useState(false);
	const [editBoardId, setEditBoardId] = useState(null); // Track the board being edited
	const [newBoardName, setNewBoardName] = useState("");
	const [newBoardImage, setNewBoardImage] = useState("");

	const handleAddBoard = () => {
		if (!newBoardName.trim()) {
			// Check if the name is empty or only whitespace
			Alert.alert("Error", "Board name is required!");
			return;
		}
		if (!newBoardImage) {
			// Check if the name is empty or only whitespace
			Alert.alert("Error", "A Photo is required!");
			return;
		}
		const newBoardId = boards.length + 1;
		const newBoard = {
			id: newBoardId,
			name: newBoardName,
			thumbnailPhoto: newBoardImage,
		};

		addBoard(newBoard);
		resetModal();
	};

	const handleEditBoard = () => {
		if (!newBoardName.trim()) {
			// Check if the name is empty or only whitespace
			Alert.alert("Error", "Board name is required!");
			return;
		}
		if (!newBoardImage) {
			// Check if the name is empty or only whitespace
			Alert.alert("Error", "A Photo is required!");
			return;
		}
		resetModal();
		const updatedBoards = boards.map((board) =>
			board.id === editBoardId
				? {
						...board,
						name: newBoardName,
						thumbnailPhoto: newBoardImage || board.thumbnailPhoto,
				  }
				: board
		);
		setBoards(updatedBoards);
		resetModal();
	};

	const handleDeleteBoard = (boardId) => {
		deleteBoard(boardId);
	};

	const resetModal = () => {
		setModalVisible(false);
		setEditBoardId(null);
		setNewBoardName("");
		setNewBoardImage("");
	};

	return (
		<View style={styles.container}>
			<Text style={styles.greeting}>
				Hi, <Text style={styles.userName}>{userName}</Text>!
			</Text>

			<FlatList
				data={boards}
				renderItem={({ item }) => (
					<Board
						name={item.name}
						thumbnailPhoto={item.thumbnailPhoto}
						onEdit={() => {
							setEditBoardId(item.id);
							setNewBoardName(item.name);
							setNewBoardImage(item.thumbnailPhoto);
							setModalVisible(true);
						}}
						onDelete={() => handleDeleteBoard(item.id)}
						onPress={() => {
							navigation.navigate("ListView", { board: item });
						}}
					/>
				)}
				keyExtractor={(item, index) =>
					item?.id ? item.id.toString() : index.toString()
				}
				numColumns={2}
				contentContainerStyle={styles.boardContainer}
			/>

			<AddBoardButton onPress={() => setModalVisible(true)} />

			<CustomModal
				visible={isModalVisible}
				onClose={resetModal}
				onSave={editBoardId ? handleEditBoard : handleAddBoard}
				title={editBoardId ? "Edit Board" : "Add New Board"}
				inputs={[
					{
						placeholder: "Board Name",
						value: newBoardName,
						setValue: setNewBoardName,
					},
				]}
				setInputs={[setNewBoardName]}
				onImageSelected={setNewBoardImage}
			/>

			<BackButton onPress={() => navigation.goBack()} />
		</View>
	);
};

export default BoardView;
