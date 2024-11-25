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
