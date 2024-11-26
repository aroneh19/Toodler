import React, { useRef } from "react";
import { Text, Animated, PanResponder, StyleSheet } from "react-native";

const Task = ({ task, onDragEnd }) => {
    const position = useRef(new Animated.ValueXY()).current;

    const panResponder = useRef(
        PanResponder.create({
            onStartShouldSetPanResponder: () => true,
            onPanResponderGrant: () => {
                position.setOffset(position.__getValue());
                position.setValue({ x: 0, y: 0 });
            },
            onPanResponderMove: Animated.event(
                [null, { dx: position.x, dy: position.y }],
                { useNativeDriver: false }
            ),
            onPanResponderRelease: (_, gestureState) => {
                position.flattenOffset();
                onDragEnd(task, gestureState.moveX, gestureState.moveY);
            }
        })
    ).current;

    return (
        <Animated.View
            style={[styles.taskContainer, position.getLayout()]}
            {...panResponder.panHandlers}
        >
            <Text style={styles.taskText}>{task.name}</Text>
        </Animated.View>
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
    taskText: {
        fontSize: 16,
    },
});

export default Task;
