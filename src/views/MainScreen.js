import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import Board from '../components/BoardView/BoardCard';
import BackButton from '../components/BackButton/BackButton';
import {AddBoardButton} from '../components/AddButton/AddButton';
import {CustomModal} from "../components/Modal/Modal";

import styles from './Styles/MainStyle';

// Import the JSON data
import initialData from '../../data/data.json';

const DUMMY_PHOTO = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dollarnote_siegel_hq.jpg/640px-Dollarnote_siegel_hq.jpg";

const MainScreen = ({ route, navigation }) => {
    const { userName } = route.params;

    const [boards, setBoards] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [editBoardId, setEditBoardId] = useState(null); // Track the board being edited
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardImage, setNewBoardImage] = useState('');

    useEffect(() => {
        setBoards(initialData.boards);
    }, []);

    const handleAddBoard = () => {
        if (!newBoardName.trim()) { // Check if the name is empty or only whitespace
            Alert.alert("Error", "Board name is required!");
            return;
        }
        if (!newBoardImage) { // Check if the name is empty or only whitespace
            Alert.alert("Error", "A Photo is required!");
            return;
        }
        const newBoardId = boards.length + 1;
        const newBoard = {
            id: newBoardId,
            name: newBoardName || `New Board ${newBoardId}`,
            thumbnailPhoto: newBoardImage || DUMMY_PHOTO,
        };

        setBoards([...boards, newBoard]);
        resetModal();
    };

    const handleEditBoard = () => {
        resetModal();
        const updatedBoards = boards.map((board) =>
            board.id === editBoardId
                ? { ...board, name: newBoardName, thumbnailPhoto: newBoardImage || board.thumbnailPhoto }
                : board
        );
        setBoards(updatedBoards);
        resetModal();
    };

    const handleDeleteBoard = (boardId) => {
        setBoards(boards.filter((board) => board.id !== boardId));
    };

    const resetModal = () => {
        setModalVisible(false);
        setEditBoardId(null);
        setNewBoardName('');
        setNewBoardImage('');
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
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
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
                    { placeholder: 'Board Name', value: newBoardName, setValue: setNewBoardName },
                ]}
                setInputs={[setNewBoardName]}
                onImageSelected={setNewBoardImage}
            />

            <BackButton onPress={() => navigation.goBack()} />
        </View>
    );
};

export default MainScreen;
