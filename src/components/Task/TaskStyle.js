import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    taskCard: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        alignSelf: 'stretch',
        borderWidth: 1,
        borderColor: '#ccc',
        position: 'relative',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#000',
        flexShrink: 1,
    },
    description: {
        fontSize: 12,
        color: '#555',
        marginVertical: 5,
    },
    isFinished: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#4caf50', // Green for finished
    },
    isNotFinished: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#f44336', // Red for not finished
    },
    colorDot: {
        width: 20,
        height: 20,
        borderRadius: 100,
        marginRight: 10,
    },
    expandedTaskCard: {
        padding: 15,
        backgroundColor: '#f9f9f9',
    },
    expandedContent: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e6e6e6',
        borderRadius: 8,
    },
    expandedText: {
        fontSize: 16,
        color: '#333',
    },
    dropdownButton: {
      paddingHorizontal: 10,
      paddingVertical: 5,
      alignSelf: 'flex-end',
    },
    dropdownButtonText: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    dropdownMenu: {
      position: 'absolute',
      top: 30, // Adjust as needed to match the dropdown button's height
      right: 35, // Aligns to the right edge of the button
      backgroundColor: '#fff',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#ccc',
      zIndex: 1,
      width: 150, // Set a fixed width for consistency
  },
    dropdownItem: {
        padding: 10,
    },
    dropdownItemText: {
        fontSize: 14,
        color: '#333',
        fontWeight: "bold"
    },
});
