# Toodler - Kanban Project Management App

Toodler is a project management app specializing in the Kanban technique, designed to help users organize and manage tasks effectively. Built with **React Native**, Toodler focuses on simplicity, speed, and user-friendly features.  

The app uses in-memory storage for managing boards, lists, and tasks, with pre-populated data loaded from `data.json` on startup.  

## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Platform Support](#platform-support)
- [Setup Instructions](#setup-instructions)
- [Running the App](#running-the-app)
- [Future Improvements](#future-improvements)
- [License](#license)

---

## Description

Toodler simplifies task management using a Kanban-based workflow. Users can create boards, lists, and tasks to organize their projects effectively. Data is preloaded from `data.json` and stored in memory during runtime.

---

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/aroneh19/Toodler.git
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

## Features

- **Boards**:
  - View, create, edit, and delete boards.
- **Lists**:
  - View, create, edit, and delete lists within boards.
- **Tasks**:
  - View, create, edit, delete, and move tasks between lists.

---

## Technologies Used
- React Native
- State Management: [Context]
- React Navigation (if applicable)

---

## Platform Support

### Primary Development Platform
- **Platform**: [iOS/Android]
- **Test Device**: [iPhone 14 Pro/Samsung Galaxy S21]
- **OS Version**: [iOS 16.5/Android 13]

### Secondary Platform Testing
- **Platform**: [iOS/Android]
- **Test Device**: [iPhone 13/Google Pixel 6]
- **OS Version**: [iOS 16.2/Android 12]
- **Testing Status**: [Limited/Partial/Comprehensive]

---

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- React Native CLI
- Xcode (for iOS development)
- Android Studio (for Android development)

### Environment Setup
1. Install React Native dependencies.
2. Configure development environment.
3. Set up emulators/simulators.

---

## Running the App

1. Start the application:
    Expo Go App Start:
    ```bash
    npx expo start
    ```
    IOS Simulator Start:
    ```bash
    npx react-native run-android
    ```
    Android Simulator Start:
    ```bash
    npx react-native run-ios
    ```

2. Data is preloaded from `data.json` on startup and reset upon restart.

---

## Future Improvements
- Persistent storage for data using a database or local storage.
- Integration with external APIs for task synchronization.
- Enhanced UI/UX for better accessibility.

---

## License
This project is licensed under the [MIT License](LICENSE).
