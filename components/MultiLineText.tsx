import React from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onAddImage?: () => void;
  numberOfLines?: number;
  style?: object;
};

export default function MultilineTextInputWithImage({
  value,
  onChangeText,
  placeholder = 'Write something...',
  onAddImage,
  numberOfLines = 6,
  style = {},
}: Props) {
  return (
    <View style={[styles.wrapper, style]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#999"
        multiline
        numberOfLines={numberOfLines}
        textAlignVertical="top"
        style={styles.input}
        keyboardAppearance={Platform.OS === 'ios' ? 'dark' : 'default'}
        accessibilityLabel="multiline-input"
      />

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onAddImage}
        style={styles.addButton}
        accessibilityLabel="add-image-button"
      >
        <Ionicons name="image-outline" size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#0B0B0B', 
    borderRadius: 12,
    padding: 12,
    minHeight: 140,
    position: 'relative',
    overflow: 'hidden',
  },
  input: {
    color: '#FFFFFF',
    fontSize: 16,
    lineHeight: 22,
    paddingRight: 48, 
    paddingBottom: 6,
    flex: 1,
  },
  addButton: {
    position: 'absolute',
    right: 12,
    bottom: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.06)',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});
