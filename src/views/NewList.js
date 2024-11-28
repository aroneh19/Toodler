import React, { useState, useCallback } from "react";
import {View, StyleSheet, ScrollView} from "react-native";
import { useAppContext } from "../context/AppContext";
import List from "../components/NewDND/ListC";

const NewList = ({ route }) => {
    const { boardId } = route.params;
    const { lists } = useAppContext();

    const [isDrag, setDrag] = useState(false);
    const [listLayouts, setListLayouts] = useState({});

    const handleDragStart = () => {
        setDrag(true);
    };

    const handleDragEnd = () => {
        setDrag(false);
    };

    // Filter lists for the given boardId
    const filteredLists = lists.filter((list) => list.boardId === boardId);

    return (
        <View style={styles.container}
        disableScrollViewPanResponder={false}>
            {filteredLists.map((list) => (
                <List
                    key={list.id}
                    list={list}
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f5",
        paddingVertical: 40,
    },
});

export default NewList;
