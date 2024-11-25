import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    boardCard: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        position: 'relative', // Required for positioning dropdown
    },
    thumbnail: {
        width: '100%',
        height: 100,
        borderRadius: 8,
    },
    name: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
    },
    dropdownButton: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
    },
    dropdownButtonText: {
        fontSize: 40,
    },
    dropdownMenu: {
        position: 'absolute',
        top: 30,
        right: 10,
        backgroundColor: '#fff',
        borderRadius: 5,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
        zIndex: 100,
    },
    dropdownItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    dropdownItemText: {
        fontSize: 14,
    },
});

