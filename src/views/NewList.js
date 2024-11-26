import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { useAppContext } from "../context/AppContext";
import List from "../components/NewDND/ListC";

const NewList = ({ route }) => {
    const { boardId } = route.params;
    const { lists } = useAppContext();

    // Filter lists for the given boardId
    const filteredLists = lists.filter((list) => list.boardId === boardId);

    return (
        <View style={styles.container}>
            <FlatList
                data={filteredLists}
                renderItem={({ item }) => <List list={item} />}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f5", // Slightly off-white for a softer feel
        paddingVertical: 40, // Add vertical padding
    },
});


export default NewList;
