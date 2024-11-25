import React from 'react';
import { View, Text, Image } from 'react-native';
import {styles} from './BoardStyle';

const Board = ({ name, thumbnailPhoto }) => {
    return (
        <View style={styles.board}>
            <Image source={{ uri: thumbnailPhoto }} style={styles.thumbnail} />
            <Text style={styles.boardTitle}>{name}</Text>
        </View>
    );
};

export default Board;
