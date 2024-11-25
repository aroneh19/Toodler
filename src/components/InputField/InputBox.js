import React from 'react';
import { TextInput } from 'react-native';
import styles from './InputStyles';

const InputField = ({ value, onChangeText, placeholder }) => {
    return (
        <TextInput
            style={styles.input}
            placeholder={placeholder}
            placeholderTextColor="#aaa"
            value={value}
            onChangeText={onChangeText}
        />
    );
};

export default InputField;
