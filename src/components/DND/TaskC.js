import React, { useRef, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Animated, PanResponder } from "react-native";
import { useAppContext } from "../../context/AppContext";

const Task = ({ task, onDragEnd, onDragStart }) => {
    const position = useRef(new Animated.ValueXY()).current;
    const [dragging, setDragging] = useState(false);
    const { setTasks, tasks, layouts } = useAppContext();

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onMoveShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                onDragStart(task.id);
                setDragging(true);
            },
            onPanResponderMove: Animated.event(
                [
                    null,
                    {
                        dx: position.x,
                        dy: position.y,
                    },
                ],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (evt, gestureState) => {
                const { moveX, moveY } = gestureState;

                const targetLayout = layouts.find(
                    (layout) =>
                        moveX > layout.x &&
                        moveX < layout.x + layout.width &&
                        moveY > layout.y &&
                        moveY < layout.y + layout.height
                );

                if (targetLayout) {
                    updateTaskListId(task.id, targetLayout.id);
                } else {
                    console.log("Dropped outside any valid layout");
                }

                onDragEnd();

                Animated.spring(position, {
                    toValue: { x: 0, y: 0 },
                    useNativeDriver: false,
                }).start();

                setDragging(false);
            },
        })
    ).current;

    const updateTaskListId = (taskId, newListId) => {
        const updatedTasks = tasks.map((task) =>
            task.id === taskId ? { ...task, listId: newListId } : task
        );
        setTasks(updatedTasks);
    };

    return (
        <Animated.View
            style={[
                styles.taskContainer,
                {
                    transform: position.getTranslateTransform(),
                    opacity: dragging ? 0.8 : 1,
                    zIndex: dragging ? 999 : 1,
                    elevation: dragging ? 100 : 4,
                    position: dragging ? 'absolute' : 'relative',
                },
            ]}
            {...panResponder.panHandlers}
        >
            <View style={styles.taskInfo}>
                <Text style={styles.taskName}>{task.name}</Text>
                <Text style={styles.taskDescription}>{task.description}</Text>
            </View>
            <View style={styles.taskActions}>
                <TouchableOpacity onPress={() => console.log("Mark as Done")} style={styles.doneButton}>
                    <Text style={styles.doneButtonText}>Done</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => console.log("Edit Task")} style={styles.editButton}>
                    <Text style={styles.editButtonText}>Edit</Text>
                </TouchableOpacity>
            </View>
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    taskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 15,
        marginVertical: 8,
        marginHorizontal: 16,
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
        borderRadius: 8,
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