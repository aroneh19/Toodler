import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import Board from '../components/BoardView/BoardCard';
import BackButton from '../components/BackButton/BackButton';
import {AddBoardButton} from '../components/AddButton/AddButton';
import styles from './Styles/MainStyle';

// Import the JSON data
import initialData from '../../data/data.json';

const MainScreen = ({ route, navigation }) => {
    const { userName } = route.params;

    // State to manage boards
    const [boards, setBoards] = useState([]);
    const [isModalVisible, setModalVisible] = useState(false);
    const [newBoardName, setNewBoardName] = useState('');
    const [newBoardImage, setNewBoardImage] = useState('');

    const[lists, setLists] = useState([]);
    [newListName, setNewList] = useState('');

    const[tasks, setTasks] = useState([]);
    [newTaskName, setNewTask] = useState('');

    useEffect(() => {
        setBoards(initialData.boards);
    }, []);

    // Function to handle adding a new board
    const handleAddBoard = () => {
        console.log(boards)
        const newBoardId = boards.length + 1;
        const newBoard = {
            id: newBoardId,
            name: `New Board ${newBoardId}`,
            thumbnailPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dollarnote_siegel_hq.jpg/640px-Dollarnote_siegel_hq.jpg",
        };

        setBoards([...boards, newBoard]); // Update the boards state
    };

    return (
        <View style={styles.container}>
            {/* Greeting */}
            <Text style={styles.greeting}>
                Hi, <Text style={styles.userName}>{userName}</Text>!
            </Text>

            {/* Boards */}
            <FlatList
                data={boards}
                renderItem={({ item }) => (
                    <Board
                        name={item.name}
                        thumbnailPhoto={item.thumbnailPhoto}
                        onPress={() => navigation.navigate('BoardView', { boardId: item.id })}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.boardContainer}
            />

            {/* Add Board Button */}
            <AddBoardButton onPress={handleAddBoard} />

            {/* Back Button */}
            <BackButton onPress={() => navigation.goBack()} />
        </View>
    );
};

export default MainScreen;
