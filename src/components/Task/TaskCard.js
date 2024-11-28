import React, { useState } from "react";
import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Modal,
    TextInput,
    Button,
    FlatList,
} from "react-native";
import { useAppContext } from "../../context/AppContext";

const Task = ({ tasks, boardId, boardLists }) => {
    const { setTasks } = useAppContext();
    const [modalVisible, setModalVisible] = useState(false);
    const [editModalVisible, setEditModalVisible] = useState(false);
    const [editedTask, setEditedTask] = useState({
        name: tasks.name,
        description: tasks.description,
        isFinished: tasks.isFinished,
    });

    const updateTaskListId = (taskId, newListId) => {
        const updatedTasks = (prevTasks) =>
            prevTasks.map((t) =>
                t.id === taskId ? { ...t, listId: newListId } : t
            );
        setTasks(updatedTasks);
    };

    const TriggerModal = () => {
        setModalVisible(true);
    };

    const handleListSelection = (newListId) => {
        updateTaskListId(tasks.id, newListId);
        setModalVisible(false);
    };

    const handleEdit = () => {
        setEditModalVisible(true);
    };

    const saveTaskChanges = () => {
        const updatedTasks = (prevTasks) =>
            prevTasks.map((t) =>
                t.id === tasks.id ? { ...t, ...editedTask } : t
            );
        setTasks(updatedTasks);
        setEditModalVisible(false);
    };

    return (
        <>
            <TouchableOpacity
                onPress={TriggerModal}
                style={[styles.taskContainer, tasks.isFinished && styles.doneTask]}
            >
                <View>
                    <Text style={styles.taskName}>{tasks.name}</Text>
                    <Text style={styles.taskDescription}>{tasks.description}</Text>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.editButton} onPress={handleEdit}>
                        <Text style={styles.buttonText}>Edit</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Select a List</Text>
                        <FlatList
                            data={boardLists}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={styles.listOption}
                                    onPress={() => handleListSelection(item.id)}
                                >
                                    <Text style={styles.listText}>{item.name}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={editModalVisible}
                onRequestClose={() => setEditModalVisible(false)}
            >
                <View style={styles.modalContainer}>
                    <View style={styles.modalContent}>
                        <Text style={styles.modalTitle}>Edit Task</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Task Name"
                            value={editedTask.name}
                            onChangeText={(text) =>
                                setEditedTask({ ...editedTask, name: text })
                            }
                        />
                        <TextInput
                            style={styles.input}
                            placeholder="Task Description"
                            value={editedTask.description}
                            onChangeText={(text) =>
                                setEditedTask({ ...editedTask, description: text })
                            }
                        />
                        <TouchableOpacity
                            style={[
                                styles.statusButton,
                                {
                                    backgroundColor: editedTask.isFinished
                                        ? "#27ae60"
                                        : "#e74c3c",
                                },
                            ]}
                            onPress={() =>
                                setEditedTask({
                                    ...editedTask,
                                    isFinished: !editedTask.isFinished,
                                })
                            }
                        >
                            <Text style={styles.statusButtonText}>
                                {editedTask.isFinished ? "Mark as Undone" : "Mark as Done"}
                            </Text>
                        </TouchableOpacity>
                        <Button title="Save" onPress={saveTaskChanges} />
                        <Button title="Cancel" onPress={() => setEditModalVisible(false)} />
                    </View>
                </View>
            </Modal>
        </>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: "#fff",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#ccc",
    },
    doneTask: {
        backgroundColor: "#d4edda", // Light green background for done tasks
    },
    taskName: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    taskDescription: {
        fontSize: 14,
        color: "#555",
    },
    taskStatus: {
        fontSize: 12,
        color: "#27ae60",
        fontWeight: "bold",
        marginTop: 5,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "flex-end",
    },
    editButton: {
        padding: 5,
        backgroundColor: "#f39c12",
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        fontSize: 12,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "80%",
        padding: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 15,
    },
    listOption: {
        padding: 10,
        backgroundColor: "#f0f0f0",
        borderRadius: 5,
        marginVertical: 5,
        width: "100%",
    },
    listText: {
        fontSize: 16,
    },
    input: {
        width: "100%",
        padding: 10,
        marginVertical: 10,
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 5,
    },
    statusButton: {
        padding: 10,
        borderRadius: 5,
        marginVertical: 10,
    },
    statusButtonText: {
        color: "#fff",
        fontSize: 14,
    },
});

export default Task;
