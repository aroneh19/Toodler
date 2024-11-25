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
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardImage, setNewBoardImage] = useState('');

    useEffect(() => {
        setBoards(initialData.boards);
    }, []);

    const handleAddBoard = () => {
        const newBoardId = boards.length + 1;
        const newBoard = {
            id: newBoardId,
            name: newBoardName || `New Board ${newBoardId}`,
            thumbnailPhoto: newBoardImage || DUMMY_PHOTO,
        };

        setBoards([...boards, newBoard]);
        setModalVisible(false);
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
                    <Board name={item.name} thumbnailPhoto={item.thumbnailPhoto} />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.boardContainer}
            />

            <AddBoardButton onPress={() => setModalVisible(true)} />

            <CustomModal
                visible={isModalVisible}
                onClose={() => setModalVisible(false)}
                onSave={handleAddBoard}
                title="Add New Board"
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
