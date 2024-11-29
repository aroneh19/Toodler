import React, {useState} from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useAppContext } from "../../context/AppContext";
import TaskC from "./TaskC";

const List = ({ list, onDragStart, onDragEnd}) => {

    const { tasks, editList, setLayouts, layouts } = useAppContext();
    // Filter tasks for this list
    const listTasks = tasks.filter((task) => task.listId === list.id);

    // State to manage list expansion
    const [isExpanded, setIsExpanded] = useState(false);


    // Toggle list expansion
    const toggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

    const onLongPressDrag = (taskId) => {
        //console.log(`Started dragging task with ID: ${taskId}`);
        setDraggedTaskId(taskId); // Track which task is being dragged
    };

    const handleDrop = (taskId) => {
        //console.log("TOD")
    };

    const handleLayout = (event) => {
        const { x, y, width, height } = event.nativeEvent.layout;

        setLayouts((prevLayouts = []) => {
            const filteredLayouts = prevLayouts.filter(layout => layout.id !== list.id);

            return [
                ...filteredLayouts,
                { id: list.id, x, y, width, height }
            ];
        });
    };



    return (

        <TouchableOpacity
            style={styles.listContainer}
            onPress={toggleExpand}

        >

            <View
                onLayout={handleLayout}
                style={[styles.listHeader, { backgroundColor: list.color }]}>
                <Text style={styles.listName}>{list.name}</Text>
                <TouchableOpacity onPress={() => editList(list.id)}>
                    <Text style={styles.editButton}>⋮</Text>
                </TouchableOpacity>
            </View>

            {isExpanded && (
                <View style={styles.tasksContainer}>
                    {listTasks.length > 0 ? (
                        listTasks.map((task) => (
                            <TaskC key={task.id}
                                   task={task}
                                   onDragStart={onDragStart}  // Pass drag start handler to TaskItem
                                   onDragEnd={onDragEnd}
                                   onLongPressDrag={onLongPressDrag}
                                   handleDrop={handleDrop}
                                   layout={layouts}
                            />
                        ))
                    ) : (
                        <Text style={styles.noTaskText}>No tasks available</Text>
                    )}
                </View>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listContainer: {
        marginVertical: 10,
        marginHorizontal: 16, // Add horizontal spacing
        backgroundColor: '#fff',
        borderRadius: 12, // Slightly rounder corners
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 }, // Adjust shadow for depth
        shadowOpacity: 0.15,
        shadowRadius: 8,
        elevation: 5,
    },
    listHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
    },
    listName: {
        fontSize: 20,
        fontWeight: '600',
        color: '#fff',
    },
    editButton: {
        fontSize: 24,
        color: '#fff',
    },
    tasksContainer: {
        paddingVertical: 10,
        paddingHorizontal: 16, // Add padding for consistent alignment
        backgroundColor: '#f7f7f7',
    },
    noTaskText: {
        textAlign: 'center',
        color: '#888',
        paddingVertical: 10,
        fontStyle: 'italic',
    },
});


export default List;