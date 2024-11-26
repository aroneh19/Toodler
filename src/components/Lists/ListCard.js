import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./ListStyle";

const List = ({ name, color, onEdit, onDelete, onPress }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <TouchableOpacity onPress={onPress} style={styles.listCard}>
        <View style={styles.listCard}>
            {/* Color dot */}
            <View style={[styles.colorDot, { backgroundColor: color }]} />

            {/* List name */}
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
        </TouchableOpacity>
    );
};

export default List;
