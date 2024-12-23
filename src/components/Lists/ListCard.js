import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./ListStyle";
import Task from "../Task/TaskCard"; // Adjust import path if needed

const List = ({ name, color, onEdit, onEditTask, onDelete, onDeleteTask, onPress, isExpanded, tasks, onTransferTask }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.listCard, isExpanded ? styles.expandedListCard : {}]}
        >
            <View style={styles.row}>
                <View style={styles.leftSection}>
                    <View style={[styles.colorDot, { backgroundColor: color }]} />
                    <Text style={styles.name}>{name}</Text>
                </View>
                <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
                    <Text style={styles.dropdownButtonText}>⋮</Text>
                </TouchableOpacity>
            </View>

            {dropdownVisible && (
                <View style={styles.expandedListCard}>
                    <TouchableOpacity style={styles.expandedContent} onPress={() => { toggleDropdown(); onEdit(); }}>
                        <Text style={styles.expandedText}>Edit</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.expandedContent} onPress={() => { toggleDropdown(); onDelete(); }}>
                        <Text style={styles.expandedText}>Delete</Text>
                    </TouchableOpacity>
                </View>
            )}

            {isExpanded && (
                <View style={styles.expandedContent}>
                    {tasks.length > 0 ? (
                        tasks.map((task) => (
                            <Task
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                isFinished={task.isFinished}
                                onTransferTask={() => onTransferTask(task)}
                                onDelete={() => onDeleteTask(task.id)} // Pass the delete function correctly
                                onEdit={() => onEditTask(task)} // Optional: Ensure edit is implemented
                            />
                        ))
                    ) : (
                        <Text style={styles.expandedText}>No tasks available</Text>
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
};

export default List;
