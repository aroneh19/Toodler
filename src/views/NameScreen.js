import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import InputField from '../components/InputField/InputBox';
import styles from './Styles/NameInputStyle';

const NameInputScreen = ({ navigation }) => {
    const [name, setName] = useState('');

    const handleContinue = () => {
        if (name.trim()) {
            navigation.navigate('Main', { userName: name }); // Pass the name to MainScreen
        } else {
            alert('Please enter your name');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>What's your name?</Text>
            <InputField
                value={name}
                onChangeText={setName}
                placeholder="Enter your name"
            />
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
        </View>
    );
};

export default NameInputScreen;
