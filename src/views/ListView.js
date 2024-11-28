import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  Modal,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useAppContext } from "../context/AppContext";
import styles from "./Styles/MainStyle";
import List from "../components/Lists/ListCard";
import { AddListButton } from "../components/AddButton/AddButton";
import BackButton from "../components/BackButton/BackButton";
import colors from '../styles/Colors';

const ListView = ({ route, navigation }) => {
  const { lists = [], tasks = [], addList, deleteList, setLists } = useAppContext();
  const { board } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [editListId, setEditListId] = useState(null);
  const [newListName, setNewListName] = useState("");
  const [newListColor, setNewListColor] = useState(colors[0]);

  const [expandedListId, setExpandedListId] = useState(null); // Track the expanded list

  const boardLists = lists.filter((list) => list.boardId === board.id);
  const listIds = boardLists.map((list) => list.id);
  const listTasks = tasks.filter((task) => listIds.includes(task.listId));

  const handleAddList = () => {
    if (!newListName.trim()) {
      Alert.alert("Error", "List name is required!");
      return;
    }
    const newList = {
      id: lists.length + 1,
      name: newListName,
      color: newListColor,
      boardId: board.id,
    };
    addList(newList);
    resetModal();
  };

  const handleEditList = () => {
    if (!newListName.trim()) {
      Alert.alert("Error", "List name is required!");
      return;
    }
    resetModal();
    const updatedLists = lists.map((list) =>
      list.id === editListId
        ? {
            ...list,
            name: newListName,
            color: newListColor,
          }
        : list
    );
    setLists(updatedLists);
    resetModal();
  };

  const handleDeleteList = (listId) => {
    deleteList(listId);
  };

  const toggleExpandList = (listId) => {
    setExpandedListId(expandedListId === listId ? null : listId);
  };

  const resetModal = () => {
    setModalVisible(false);
    setEditListId(null);
    setNewListName("");
    setNewListColor(colors[0]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>
        <Text>{board.name}</Text>
      </Text>
      <FlatList
          data={boardLists}
          renderItem={({ item }) => {
              const filteredTasks = listTasks.filter((task) => task.listId === item.id);
              return (
                  <View>
                      <List
                          name={item.name}
                          color={item.color}
                          onEdit={() => {
                              setEditListId(item.id);
                              setNewListName(item.name);
                              setNewListColor(item.color);
                              setModalVisible(true);
                          }}
                          onDelete={() => {
                              handleDeleteList(item.id);
                          }}
                          onPress={() => toggleExpandList(item.id)}
                          isExpanded={expandedListId === item.id}
                          tasks={filteredTasks} // Pass tasks here
                      />
                  </View>
              );
          }}
          keyExtractor={(item, index) =>
              item?.id ? item.id.toString() : index.toString()
          }
          numColumns={1}
          contentContainerStyle={styles.boardContainer}
      />
      <AddListButton onPress={() => setModalVisible(true)} />
      <BackButton onPress={() => navigation.goBack()} />

      {/* Modal for Adding List */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={resetModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editListId ? "Edit List" : "Add New List"}
            </Text>
            <TextInput
              style={styles.input}
              placeholder="List Name"
              value={newListName}
              onChangeText={setNewListName}
              autoFocus={true}
            />
            <View style={styles.colorPickerContainer}>
              {colors.map((color) => (
                <TouchableOpacity
                  key={color}
                  style={[
                    styles.colorCircle,
                    {
                      backgroundColor: color,
                      borderWidth: color === newListColor ? 2 : 0,
                    },
                  ]}
                  onPress={() => setNewListColor(color)}
                />
              ))}
            </View>
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.button}
                onPress={editListId ? handleEditList : handleAddList}
              >
                <Text style={styles.buttonText}>
                  {editListId ? "Save" : "Add"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.button, styles.cancelButton]}
                onPress={resetModal}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ListView;
