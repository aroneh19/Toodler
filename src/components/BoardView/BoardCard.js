import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import {styles} from "./BoardStyle";

const Board = ({ name, thumbnailPhoto, onEdit, onDelete }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <View style={styles.boardCard}>
            <Image source={{ uri: thumbnailPhoto }} style={styles.thumbnail} />
            <Text style={styles.name}>{name}</Text>

            {/* Three-dot button */}
            <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                <Text style={styles.dropdownButtonText}>⋮</Text>
            </TouchableOpacity>

            {/* Dropdown menu */}
            {dropdownVisible && (
                <View style={styles.dropdownMenu}>
                    <TouchableOpacity style={styles.dropdownItem} onPress={() => {
                        toggleDropdown();
                        onEdit();
                    }}>
                        <Text style={styles.dropdownItemText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.dropdownItem} onPress={() => {
                        toggleDropdown();
                        onDelete();
                    }}>
                        <Text style={styles.dropdownItemText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}
        </View>
    );
};
export default Board;
