import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
    boardCard: {
        margin: 10,
        padding: 10,
        backgroundColor: '#24252A',
        borderRadius: 20,
        width: '45%',
    },
    thumbnail: {
        width: '100%',
        height: 100,
        borderRadius: 8,
        marginBottom: 10,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 2,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        flex: 1,
    },
    dropdownButton: {
        padding: 5,
    },
    dropdownButtonText: {
        fontSize: 20,
        color: '#fff',
    },
    dropdownMenu: {
        position: 'absolute',
        top: '100%',
        right: 0,
        backgroundColor: '#1C1C1F',
        borderRadius: 8,
        overflow: 'hidden',
        width: 100,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 10,
        zIndex: 1000,
    },    
    dropdownItem: {
        paddingVertical: 10,
        paddingHorizontal: 12,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1C1C1F',
    },
    dropdownDivider: {
        height: 1,
        backgroundColor: '#2A2A2E',
    },
    dropdownItemText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '500',
    },
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        padding: 10,
    },
});

export default styles;
