import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { styles } from "./BoardStyle";

const Board = ({ name, thumbnailPhoto, onEdit, onDelete, onPress }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <TouchableOpacity onPress={onPress} style={styles.boardCard}>
            <Image source={{ uri: thumbnailPhoto }} style={styles.thumbnail} />
            
            {/* Container for name and dropdown button */}
            <View style={styles.infoRow}>
                <Text style={styles.name}>{name}</Text>
                
                {/* Dropdown button */}
                <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                    <Text style={styles.dropdownButtonText}>⋮</Text>
                </TouchableOpacity>
            </View>

            {/* Dropdown menu */}
            {dropdownVisible && (
                <View style={styles.dropdownMenu}>
                    {/* Edit Button */}
                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                            toggleDropdown();
                            onEdit();
                        }}
                    >
                        <Text style={styles.dropdownItemText}>Edit</Text>
                    </TouchableOpacity>

                    {/* Divider */}
                    <View style={styles.dropdownDivider} />

                    {/* Delete Button */}
                    <TouchableOpacity
                        style={styles.dropdownItem}
                        onPress={() => {
                            toggleDropdown();
                            onDelete();
                        }}
                    >
                        <Text style={styles.dropdownItemText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}

        </TouchableOpacity>
    );
};

export default Board;
