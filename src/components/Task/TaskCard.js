import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./TaskStyle";

const Task = ({ name, description, isFinished, onPress, onDelete, onEdit }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [moveTaskModalVisible, setMoveTaskModalVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <TouchableOpacity
            onPress={() => setMoveTaskModalVisible(true)}
            style={styles.taskCard}
        >
            <View style={styles.leftSection}>
                <View style={[styles.colorDot, { backgroundColor: isFinished ? '#4caf50' : '#f44336' }]} />
                <View style={{ flexDirection: 'column', flexShrink: 1 }}>
                    <Text style={styles.name}>{name}</Text>
                    <Text style={styles.description}>{description}</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                <Text style={styles.dropdownButtonText}>⋮</Text>
            </TouchableOpacity>

            {dropdownVisible && (
                <View style={styles.dropdownMenu}>
                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                            toggleDropdown();
                            onEdit();
                        }}
                        >
                        <Text style={styles.dropdownItemText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownItem} onPress={() => { toggleDropdown(); onDelete(); }}>
                        <Text style={styles.dropdownItemText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        </TouchableOpacity>
    );
};

export default Task;
