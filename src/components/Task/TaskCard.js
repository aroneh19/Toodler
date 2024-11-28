import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./TaskStyle";

const Task = ({ name, description, isFinished, onPress }) => {
    
    return (
        <TouchableOpacity onPress={onPress} style={styles.taskCard}>
            <View style={styles.row}>
                {/* If the task is done or not */}
                <Text style={styles.isFinished}>{isFinished}</Text>
                {/* Name */}
                <Text style={styles.name}>{name}</Text>
                {/* Description */}
                <Text style={styles.name}>{description}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default Task;
