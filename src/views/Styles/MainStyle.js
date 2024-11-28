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
        width: '85%',
        backgroundColor: '#2c2c2c', // Dark background for modal
        borderRadius: 10,
        padding: 20,
        elevation: 5,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
        marginBottom: 20,
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
        flex: 1,
        paddingVertical: 10,
        marginHorizontal: 5,
        backgroundColor: '#007BFF',
        borderRadius: 5,
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#FF5733', // Red for cancel button
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    // Add this to your styles
    taskContainer: {
        paddingLeft: 20,
        paddingTop: 10,
    },
    taskText: {
        fontSize: 14,
        color: "#555",
    },
  
});

export default styles;
