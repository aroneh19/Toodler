import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { useAppContext } from '../context/AppContext';
import styles from './Styles/MainStyle';
import List from '../components/Lists/ListCard';
import {AddListButton} from '../components/AddButton/AddButton';
import BackButton from '../components/BackButton/BackButton';

const BoardView = ({ route, navigation }) => {
    const { board } = route.params;
    const { lists = [], tasks = [] } = useAppContext(); // Provide default empty arrays

    const boardLists = lists.filter((list) => list.boardId === board.id);
    const listIds = boardLists.map((list) => list.id);
    const boardTasks = tasks.filter((task) => listIds.includes(task.listId));
    console.log(boardLists)

    return (
        <View style={styles.container}>
            <Text style={styles.greeting}>
                <Text>{board.name}</Text>
            </Text>
            <FlatList
                data={boardLists}
                renderItem={({ item }) => (
                    <List
                        name={item.name}
                        color={item.color}
                        onEdit={() => {
                            setEditListId(item.id);
                            setNewListName(item.name);
                            setModalVisible(true);
                        }}
                        onDelete={() => handleDeleteList(item.id)}
                        onPress={() => {
                            navigation.navigate('ListView', { list: item });
                        }}
                    />
                )}
                keyExtractor={(item, index) => (item?.id ? item.id.toString() : index.toString())}
                numColumns={1}
                contentContainerStyle={styles.boardContainer}
            />
            <AddListButton onPress={() => setModalVisible(true)} />
            <BackButton onPress={() => navigation.goBack()} />
        </View>
    );
};

export default BoardView;
