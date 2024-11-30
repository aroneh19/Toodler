import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1e1e1e',
        padding: 10,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginBottom: 10,
        padding: 40,
    },
    boardContainer: {
        justifyContent: 'space-between',
    },
    // New styles for modal
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    },
    modalContent: {
        width: '90%',
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 6,
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 15,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fff',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    colorPickerContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Allow items to wrap to the next row
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    colorCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        margin: 5, // Add some margin for spacing
        borderWidth: 2,
        borderColor: '#fff', // White border
    },

    modalButtons: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
    button: {
        marginTop: 20,
        paddingVertical: 12,
        paddingHorizontal: 25,
        borderRadius: 8,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#FF5733', // Red for cancel button
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    // Add this to your styles
    taskContainer: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    taskText: {
        fontSize: 14,
        color: "#555",
    }, listOption: {
        padding: 15,
        marginVertical: 8,
        backgroundColor: '#f8f8f8',
        borderRadius: 8,
        borderColor: '#ddd',
        borderWidth: 1,
    },
    listText: {
        textAlign: "center",
        fontSize: 16,
        color: '#555',
        fontWeight: "bold",
    }


});

export default styles;
