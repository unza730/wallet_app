import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const RadioBtn = ({ options, selectedOption, onSelect }) => {
  return (
    <View style={styles.container}>
      {options.map((option) => (
        <TouchableOpacity
          key={option}
          style={styles.radioButton}
          onPress={() => onSelect(option)}
        >
          <View
            style={[
              styles.radioButtonInner,
              option === selectedOption && styles.radioButtonSelected,
            ]}
          />
          <Text style={styles.radioButtonLabel}>{option}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  radioButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  radioButtonInner: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'gray',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    borderColor: 'blue',
  },
  radioButtonLabel: {
    fontSize: 16,
  },
});

export default RadioBtn;