# Toodler - Kanban Project Management App

Toodler is a project management app specializing in the Kanban technique, designed to help users organize and manage tasks effectively. Built with **React Native**, Toodler focuses on simplicity, speed, and user-friendly features.  

The app uses in-memory storage for managing boards, lists, and tasks, with pre-populated data loaded from `data.json` on startup.  

## Table of Contents
- [Installation](#installation)
- [Running Instructions](#running-instructions)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Models](#models)
- [License](#license)

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/toodler.git
    ```

2. Navigate to the project folder:
    ```bash
    cd toodler
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Install the React Native CLI (if not already installed):
    ```bash
    npm install -g react-native-cli
    ```

---

## Running Instructions

1. Start the application:
    ```bash
    npx react-native run-android
    ```
   or:
    ```bash
    npx react-native run-ios
    ```

2. Data is preloaded from the provided `data.json` file at startup. Changes during runtime are stored in memory only and will be reset when the app is restarted.

---

## Features

### Boards
- **View Boards**: See all your boards in the Board view.
- **Create Board**: Add a new board.
- **Delete Board**: Remove an existing board.
- **Edit Board**: Modify details of an existing board.

### Lists
- **View Lists**: Display all lists associated with a specific board.
- **Create List**: Add a new list to a board.
- **Delete List**: Remove an existing list.
- **Edit List**: Modify details of an existing list.

### Tasks
- **View Tasks**: Display all tasks within a list.
- **Create Task**: Add a new task to a list.
- **Delete Task**: Remove an existing task.
- **Edit Task**: Modify details of an existing task.
- **Move Task**: Transfer tasks between lists.

---

## License
This project is licensed under the [MIT License] (LICENSE).


