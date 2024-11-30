import React, { useState} from "react";
import { View, Text, FlatList, Alert, StyleSheet, TouchableOpacity } from "react-native";
import Board from "../components/BoardView/BoardCard";
import BackButton from "../components/BackButton/BackButton";
import { AddBoardButton } from "../components/AddButton/AddButton";
import { CustomModal } from "../components/Modal/Modal";
import styles from "./Styles/MainStyle";
import { useAppContext } from "../context/AppContext";
import { format } from "date-fns";

const DUMMY_PHOTO =
	"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dollarnote_siegel_hq.jpg/640px-Dollarnote_siegel_hq.jpg";

const BoardView = ({ route, navigation }) => {
	const { boards, addBoard, deleteBoard, setBoards } = useAppContext();
	const { userName } = route.params || {};

	const [isModalVisible, setModalVisible] = useState(false);
	const [editBoardId, setEditBoardId] = useState(null);
	const [newBoardName, setNewBoardName] = useState("");
	const [newBoardImage, setNewBoardImage] = useState("");

	const handleAddBoard = () => {
		if (!newBoardName.trim()) {
			Alert.alert("Error", "Board name is required!");
			return;
		}
		if (!newBoardImage) {
			Alert.alert("Error", "A Photo is required!");
			return;
		}
		const newBoardId = boards.length + 1;
		const newBoard = {
			id: newBoardId,
			name: newBoardName || `New Board ${newBoardId}`,
			thumbnailPhoto: newBoardImage || DUMMY_PHOTO,
		};

		addBoard(newBoard);
		resetModal();
	};

	const handleEditBoard = () => {
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

	const currentDate = format(new Date(), "EEE, dd MMMM"); // Example: "Wed, 20 July"

	return (
		<View style={styles.container}>
			{/* Header Section */}
			<View style={styles.header}>
				<View>
					<Text style={styles.greeting}>
						Hi, <Text style={styles.userName}>{userName || "User"}</Text>!
					</Text>
					<Text style={styles.date}>{currentDate}</Text>
				</View>
				{/* Add Button */}
				<TouchableOpacity
					style={styles.addButton}
					onPress={() => setModalVisible(true)}
				>
					<Text style={styles.addButtonText}>+</Text>
				</TouchableOpacity>
			</View>
	
			{/* Board List */}
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
	
			{/* Modal */}
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
				onImageSelected={setNewBoardImage}
			/>
	
			{/* Back Button Footer */}
			<View style={styles.footer}>
				<BackButton onPress={() => navigation.goBack()} />
			</View>
		</View>
	);
	
	
};

export default BoardView;