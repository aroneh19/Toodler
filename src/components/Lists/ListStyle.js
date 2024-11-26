import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    listCard: {
        flex: 1,
        margin: 10,
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
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
        width: 30,
        height: 30,
        borderRadius: 100,
        marginRight: 20,
    },
    name: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000',
    },
    dropdownButtonText: {
        fontSize: 40,
        color: '#000',
    },
});
