import React, { useState, useEffect } from 'react';
import {View, Text, FlatList, Modal, TextInput, TouchableOpacity, Alert } from 'react-native';
import Board from '../components/BoardView/BoardCard';
import BackButton from '../components/BackButton/BackButton';
import {AddBoardButton} from '../components/AddButton/AddButton';
import styles from './Styles/MainStyle';
import { useAppContext } from '../context/AppContext';

const MainScreen = ({ route, navigation }) => {
    const { boards, addBoard } = useAppContext();
    const { userName } = route.params || {};

    // Function to handle adding a new board
    const handleAddBoard = () => {
        console.log(boards)
        const newBoard = {
            id: newBoardId + 1,
            name: `New Board ${newBoardId}`,
            thumbnailPhoto: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Dollarnote_siegel_hq.jpg/640px-Dollarnote_siegel_hq.jpg",
        };
        addBoard(newBoard);
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
                        onPress={() => {
                            navigation.navigate('BoardView', { boardId: item.id });
                        }}
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
