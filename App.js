import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NameInputView from "./src/views/NameView"; // Screen for entering the name
import BoardView from "./src/views/BoardView"; // Main screen of the app
import ListView from "./src/views/ListView"; // Screen to display the board
import { AppProvider } from "./src/context/AppContext"; // App context provider
import TaskView from "./src/views/TaskView"; // Screen to display the list

const Stack = createStackNavigator();

const App = () => {
	return (
		<AppProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{/* Initial screen to ask for the user's name */}
					<Stack.Screen name="NameInput" component={NameInputView} />
					{/* Main screen to display the app content */}
					<Stack.Screen name="BoardView" component={BoardView} />
					{/* Board screen to display list in Board */}
					<Stack.Screen name="ListView" component={ListView} />

					<Stack.Screen name="TaskView" component={TaskView} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppProvider>
	);
};

export default App;
