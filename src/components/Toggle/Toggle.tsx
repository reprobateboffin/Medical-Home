import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../../theme/colors';

interface ToggleProps {
  isEnabled: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isEnabled, onToggle }) => {
  return (
    <TouchableOpacity 
      onPress={onToggle}
      style={[
        styles.container,
        { backgroundColor: isEnabled ? colors.primary.blue : '#E0E0E0' }
      ]}
    >
      <View style={[
        styles.dot,
        { 
          transform: [{ translateX: isEnabled ? 20 : 0 }],
          backgroundColor: isEnabled ? colors.primary.green : colors.base.white
        }
      ]} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 62,
    height: 30,
    borderRadius: 20,
    padding: 4.74,
    justifyContent: 'center',
  },
  dot: {
    width: 20,
    height: 20,
    borderRadius: 20,
    shadowColor: colors.base.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});

export default Toggle; 