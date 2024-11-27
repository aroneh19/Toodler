import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "./ListStyle";

const List = ({ name, color, onEdit, onDelete, onPress, isExpanded }) => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
  
    const toggleDropdown = () => {
      setDropdownVisible(!dropdownVisible);
    };
  
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.listCard, isExpanded ? styles.expandedListCard : {}]}
      >
        <View style={styles.row}>
          <View style={styles.leftSection}>
            <View style={[styles.colorDot, { backgroundColor: color }]} />
            <Text style={styles.name}>{name}</Text>
          </View>
          <TouchableOpacity style={styles.dropdownButton} onPress={toggleDropdown}>
            <Text style={styles.dropdownButtonText}>⋮</Text>
          </TouchableOpacity>
        </View>
  
        {dropdownVisible && (
          <View style={styles.dropdownMenu}>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { toggleDropdown(); onEdit(); }}>
              <Text style={styles.dropdownItemText}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.dropdownItem} onPress={() => { toggleDropdown(); onDelete(); }}>
              <Text style={styles.dropdownItemText}>Delete</Text>
            </TouchableOpacity>
          </View>
        )}
  
        {isExpanded && (
          <View style={styles.expandedContent}>
            <Text style={styles.expandedText}>Extended Content Here</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  };
  

export default List;
