import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import {styles} from './BackButtStyle';

const BackButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.backButton} onPress={onPress}>
            <Text style={styles.backButtonText}>Go Back</Text>
        </TouchableOpacity>
    );
};



export default BackButton;
