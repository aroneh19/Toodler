import { View, Text, TouchableOpacity } from 'react-native';

const BoardView = ({ route }) => {
    const { boardId } = route.params;
    console.log("Board Id is:", boardId);
}

export default BoardView;