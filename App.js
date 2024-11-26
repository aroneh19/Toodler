import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import NameInputView from "./src/views/NameView"; // Screen for entering the name
import MainView from "./src/views/MainView"; // Main screen of the app
import BoardView from "./src/views/BoardView"; // Screen to display the board
import { AppProvider } from "./src/context/AppContext"; // App context provider
import ListView from "./src/views/ListView"; // Screen to display the list

const Stack = createStackNavigator();

const App = () => {
	return (
		<AppProvider>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{ headerShown: false }}>
					{/* Initial screen to ask for the user's name */}
					<Stack.Screen name="NameInput" component={NameInputView} />
					{/* Main screen to display the app content */}
					<Stack.Screen name="Main" component={MainView} />
					{/* Board screen to display list in Board */}
					<Stack.Screen name="BoardView" component={BoardView} />

					<Stack.Screen name="ListView" component={ListView} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppProvider>
	);
};

export default App;
