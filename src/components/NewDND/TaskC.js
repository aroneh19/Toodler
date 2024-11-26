import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Task = ({ task }) => {
    const handleMarkAsDone = () => {
        // Implement task completion logic (from context or passed as prop)
        console.log(`Marking task "${task.name}" as done!`);
    };

    const handleEditTask = () => {
        // Implement task editing logic (from context or passed as prop)
        console.log(`Editing task "${task.name}"`);
    };

    return (
        <View style={styles.taskContainer}>
            <View style={styles.taskInfo}>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
            </View>
            <View style={styles.taskActions}>
                <TouchableOpacity onPress={handleMarkAsDone} style={styles.doneButton}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={handleEditTask} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15, // Adjust padding for better spacing
        marginVertical: 8, // Consistent spacing between tasks
        marginHorizontal: 16, // Add horizontal margin
        backgroundColor: "#fff",
        borderRadius: 8,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        elevation: 4,
    },
    taskInfo: {
        flex: 1,
    },
    taskName: {
        fontSize: 16,
        fontWeight: "600",
        color: "#333",
    },
    taskDescription: {
        fontSize: 14,
        color: "#777",
    },
    taskActions: {
        flexDirection: "row",
    },
    doneButton: {
        marginRight: 10,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "#4CAF50",
        borderRadius: 8, // Rounded corners for modern look
    },
    doneButtonText: {
        color: "#fff",
        fontWeight: "600",
    },
    editButton: {
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: "#FF9800",
        borderRadius: 8,
    },
    editButtonText: {
        color: "#fff",
        fontWeight: "600",
    },
});


export default Task;
