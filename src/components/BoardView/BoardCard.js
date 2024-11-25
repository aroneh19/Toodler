import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from './BoardStyle';

const Board = ({ name, thumbnailPhoto, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.board}>
            <Image source={{ uri: thumbnailPhoto }} style={styles.thumbnail} />
            <Text style={styles.boardTitle}>{name}</Text>
        </TouchableOpacity>
    );
};

export default Board;
