import React, {useEffect, useState} from 'react';
import { View, Text, Modal, TextInput, TouchableOpacity, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { styles } from './ModalStyle';

export const CustomModal = ({
                                visible,
                                onClose,
                                onSave,
                                title,
                                inputs = [],
                                setInputs = [],
                                onImageSelected,
                                saveButtonText = 'Save',
                                cancelButtonText = 'Cancel',
                            }) => {
    const [selectedImage, setSelectedImage] = useState(null); // State to hold selected image URI

    useEffect(() => {
        if (!visible) {
            setSelectedImage(null);
        }
    }, [visible]);
    const handleSelectImage = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Permission required', 'Camera roll permissions are required to select an image.');
            return;
        }

        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.canceled) {
            const imageUri = result.assets[0].uri;
            setSelectedImage(imageUri); // Update the state with the selected image URI
            onImageSelected(imageUri); // Call the parent handler with the image URI
        }
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <Text style={styles.modalTitle}>{title}</Text>

                    {inputs.map((inputValue, index) => (
                        <TextInput
                            key={index}
                            style={styles.input}
                            placeholder={inputValue.placeholder}
                            placeholderTextColor="#888888"
                            value={inputValue.value}
                            onChangeText={(text) => setInputs[index](text)}
                        />
                    ))}

                    {/* Image preview */}
                    {selectedImage && (
                        <Image
                            source={{ uri: selectedImage }}
                            style={styles.imagePreview} // Style for the preview
                        />
                    )}

                    <TouchableOpacity style={styles.imageButton} onPress={handleSelectImage}>
                        <Text style={styles.buttonText}>Select Image</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.saveButton} onPress={onSave}>
                        <Text style={styles.buttonText}>{saveButtonText}</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
                        <Text style={styles.buttonText}>{cancelButtonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};
