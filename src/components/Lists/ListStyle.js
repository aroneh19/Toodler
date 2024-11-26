import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listCard: {
        flex: 1,
        margin: 10,
        padding: 10,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 4,
        alignSelf: 'stretch',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between', // Ensures items on the left and right are spaced apart
    },
    leftSection: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rightSection: {
        alignItems: 'flex-end',
    },
    colorDot: {
        width: 20,
        height: 20,
        borderRadius: 100,
        marginRight: 20,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
    },
    dropdownButtonText: {
        fontSize: 20,
        color: '#000',
    },
});
