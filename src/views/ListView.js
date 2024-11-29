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
import { AddListButton, AddTaskButton } from "../components/AddButton/AddButton";
import BackButton from "../components/BackButton/BackButton";
import colors from '../styles/Colors';

const ListView = ({ route, navigation }) => {
  const { lists = [], tasks = [], addList, addTask, deleteList, deleteTask, setLists, setTasks } = useAppContext();
  const { board } = route.params;

  const [modalVisible, setModalVisible] = useState(false);
  const [editListId, setEditListId] = useState(null);
  const [newListName, setNewListName] = useState("");
  const [newListColor, setNewListColor] = useState(colors[0]);

  const [expandedListId, setExpandedListId] = useState(null); // Track the expanded list

  const[taskModalVisible, setTaskModalVisible] = useState(false);
  const [editTaskId, setEditTaskId] = useState(null);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDescription, setNewTaskDescription] = useState("");
  const [newTaskIsFinished, setNewTaskIsFinished] = useState(false);
  const [transferModalVisible, setTransferModalVisible] = useState(false);
  const [taskToTransfer, setTaskToTransfer] = useState(null);

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

  const handleAddTask = () => {
    if (!newTaskName.trim()) {
      Alert.alert("Error", "Task name is required!");
      return;
    }
    if (!newTaskDescription.trim()) {
      Alert.alert("Error", "Task description is required!");
      return;
    }
    const newTask = {
      id: tasks.length + 1,
      name: newTaskName,
      description: newTaskDescription,
      isFinished: newTaskIsFinished,
      listId: expandedListId,
    };
    addTask(newTask);
    resetModal();
  };

  const handleEditTask = () => {
    if (!newTaskName.trim()) {
      Alert.alert("Error", "Task name is required!");
      return;
    }
    const updatedTasks = tasks.map((task) =>
      task.id === editTaskId
        ? {
            ...task,
            name: newTaskName,
            description: newTaskDescription,
            isFinished: newTaskIsFinished,
          }
        : task
    );
    setTasks(updatedTasks);
    resetModal(); // Clear the modal fields
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId); // Use deleteTask from context
  };

  const toggleExpandList = (listId) => {
    setExpandedListId(expandedListId === listId ? null : listId);
  };

  const handleTransferTask = (destinationListId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskToTransfer.id
        ? { ...task, listId: destinationListId }
        : task
    );
    setTasks(updatedTasks);
    setTransferModalVisible(false);
    setTaskToTransfer(null);
  };
  

  const resetModal = () => {
    setModalVisible(false);
    setEditListId(null);
    setNewListName("");
    setNewListColor(colors[0]);

    setTaskModalVisible(false);
    setEditTaskId(null);
    setNewTaskName("");
    setNewTaskDescription("");
    setNewTaskIsFinished(false);
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
                        onDelete={() => handleDeleteList(item.id)}
                        onPress={() => toggleExpandList(item.id)}
                        isExpanded={expandedListId === item.id}
                        tasks={filteredTasks} // Pass tasks here
                        onDeleteTask={handleDeleteTask}
                        onEditTask={(task) => {
                          console.log(boardLists);
                          setEditTaskId(task.id);
                          setNewTaskName(task.name);
                          setNewTaskDescription(task.description);
                          setNewTaskIsFinished(task.isFinished);
                          setTaskModalVisible(true);
                        }}
                        onTransferTask={(task) => {
                          setTaskToTransfer(task);
                          setTransferModalVisible(true);
                        }}
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
      {/* Conditionally Render the Button */}
      {expandedListId ? (
        <AddTaskButton
          onPress={() => {setTaskModalVisible(true)}}
        />
      ) : (
        <AddListButton onPress={() => setModalVisible(true)} />
      )}

      <BackButton onPress={() => navigation.goBack()} />

      {/* Modal for Transfering Task to Another List */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={transferModalVisible}
        onRequestClose={() => setTransferModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Transfer Task</Text>
            <FlatList
              data={boardLists}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.listOption}
                  onPress={() => handleTransferTask(item.id)}
                >
                  <Text style={styles.listText}>{item.name}</Text>
                </TouchableOpacity>
              )}
            />
            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={() => setTransferModalVisible(false)}
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>


      {/* Modal for Adding/Editing List */}
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

      {/* Modal for Adding/Editing Tasks */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={taskModalVisible}
        onRequestClose={resetModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {editTaskId ? "Edit Task" : "Add New Task"}
            </Text>
            
            {/* Task Name Input */}
            <TextInput
              style={styles.input}
              placeholder="Task Name"
              value={newTaskName}
              onChangeText={setNewTaskName}
            />
            
            {/* Task Description Input */}
            <TextInput
              style={styles.input}
              placeholder="Task Description"
              value={newTaskDescription}
              onChangeText={setNewTaskDescription}
            />
            
            {/* Task Status (isFinished) Selector */}
            <TouchableOpacity
              style={styles.checkboxContainer}
              onPress={() => setNewTaskIsFinished(!newTaskIsFinished)}
            >
              <Text style={styles.checkboxLabel}>
                {newTaskIsFinished ? "✔️ Task is finished" : "❌ Task not finished"}
              </Text>
            </TouchableOpacity>
          
            {/* Modal Buttons */}
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.button}
                onPress={editTaskId ? handleEditTask : handleAddTask}
              >
                <Text style={styles.buttonText}>
                  {editTaskId ? "Save Task" : "Add Task"}
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
