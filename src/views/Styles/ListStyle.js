import { StyleSheet } from "react-native";

const ListStyle = StyleSheet.create({
    listContainer: {
        backgroundColor: "#ffffff",
        borderRadius: 10,
        marginVertical: 10,
        padding: 15,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    listHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    listColor: {
        width: 20,
        height: 20,
        borderRadius: 10,
    },
    listTitle: {
        flex: 1,
        marginLeft: 10,
        fontSize: 18,
        fontWeight: "bold",
        color: "#333",
    },
    optionsMenu: {
        fontSize: 18,
        color: "#888",
    },
    taskContainer: {
        marginTop: 10,
        backgroundColor: "#f9f9f9",
        borderRadius: 6,
        padding: 10,
    },
    taskText: {
        fontSize: 16,
        color: "#555",
        marginBottom: 5,
    },
    noTaskText: {
        fontSize: 16,
        color: "#999",
        fontStyle: "italic",
    },
});

export default ListStyle;
