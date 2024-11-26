import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./ListStyle";

const List = ({ name, color, onEdit, onDelete, onPress, isExpanded }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <TouchableOpacity onPress={onPress} style={[styles.listCard, isExpanded ? styles.expandedListCard : {}]}>
            <View style={styles.listCard}>
                {/* Container for the color dot and list name */}
                <View style={styles.row}>
                    {/* Container for color dot and name to keep them beside each other */}
                    <View style={styles.leftSection}>
                        {/* Color dot */}
                        <View style={[styles.colorDot, { backgroundColor: color }]} />

                        {/* List name */}
                        <Text style={styles.name}>{name}</Text>
                    </View>

                    {/* Three-dot button */}
                    <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                        <Text style={styles.dropdownButtonText}>⋮</Text>
                    </TouchableOpacity>
                </View>

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
