import React from 'react';
import { View, Text } from 'react-native';
import { useAppContext } from '../context/AppContext';

const BoardView = ({ route }) => {
    const { boardId } = route.params;
    const { lists = [], tasks = [] } = useAppContext(); // Provide default empty arrays

    console.log('lists:', lists);
    console.log('tasks:', tasks);
    console.log('boardId:', boardId);

    const boardLists = lists.filter((list) => list.boardId === boardId);
    const listIds = boardLists.map((list) => list.id);
    const boardTasks = tasks.filter((task) => listIds.includes(task.listId));

    return (
        <View>
            <Text>Board View</Text>
            {boardLists.map((list) => (
                <Text key={list.id}>List: {list.name}</Text>
            ))}
            {boardTasks.map((task) => (
                <Text key={task.id}>Task: {task.name}</Text>
            ))}
        </View>
    );
};

export default BoardView;
