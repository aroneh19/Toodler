import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './AddButtonStyle';

export const AddBoardButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>+ Add Board</Text>
        </TouchableOpacity>
    );
};

export const AddListButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>+ Add List</Text>
        </TouchableOpacity>
    );
};

export const AddTaskButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>+ Add Task</Text>
        </TouchableOpacity>
    );
};