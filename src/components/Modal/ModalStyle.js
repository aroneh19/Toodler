import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContainer: {
        width: '90%', // More width for better usability
        backgroundColor: '#222', // Darker background for contrast
        borderRadius: 10,
        padding: 20,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 20,
        color: '#fff', // White text for visibility
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        width: '100%',
        padding: 12,
        backgroundColor: '#333', // Distinct input field background
        color: '#fff', // White text for better visibility
        fontSize: 16,
        borderRadius: 8,
        marginBottom: 16,
    },
    saveButton: {
        backgroundColor: '#4CAF50', // Green save button
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#F44336', // Red cancel button
        padding: 12,
        borderRadius: 8,
        marginTop: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff', // White text for buttons
        fontSize: 16,
        fontWeight: 'bold',
    },
    imageButton: {
        backgroundColor: '#2196F3', // Blue pick image button
        padding: 12,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center',
        marginBottom: 16,
    },
    imagePreview: {
        width: 200, // Adjust the width as needed
        height: 150, // Adjust the height as needed
        marginVertical: 10, // Add space around the image
        borderRadius: 10, // Optional: rounded corners
    },
});

