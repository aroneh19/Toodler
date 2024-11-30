import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#181A1F",
		paddingHorizontal: 16,
		paddingTop: 60,
	},
	header: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: 12,
		marginLeft: 10,
		marginRight: 10,
		marginTop: 8,
	},
	headerLeft: {
		flexDirection: "column",
		justifyContent: "flex-start",
	},
	greeting: {
		fontSize: 44,
		fontWeight: "bold",
		color: "#FFFFFF",
	},
	date: {
		fontSize: 14,
		color: "#8D8D8D",
		marginTop: 4,
	},
	addButton: {
		width: 48,
		height: 48,
		borderRadius: 16,
		backgroundColor: "#24252A",
		alignItems: "center",
		justifyContent: "center",
		borderColor: "#ffff",
		borderWidth: 1.5,
	},
	addButtonText: {
		fontSize: 32,
		color: "#FFFFFF",
		textAlign: "center",
		lineHeight: 34,
	},
	boardContainer: {
		paddingTop: 16,
		paddingBottom: 16,
	},
    backButtonContainer: {
        marginTop: 20,
        marginBottom: 20,
    },
    footer: {
        position: 'absolute',
        bottom: 30,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
});

export default styles;
