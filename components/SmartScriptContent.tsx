import Ionicons from "@expo/vector-icons/Ionicons";
import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import CustomButton from "./CustomButton";
import PostTypeList from "./PostTypeList";
import SettingsSection from "./SettingsSection";

const SmartScriptContent = () => {
  const [text, setText] = useState<string>("");
  return (
    <View>
      <Text
        style={{ fontFamily: "Poppins_700Bold", color: "white", fontSize: 24 }}
      >
        What type of posters do you want to create?
      </Text>
      <PostTypeList />
      <View style={styles.wrapper}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Write something..."
          placeholderTextColor="#999"
          multiline
          numberOfLines={6}
          textAlignVertical="top"
          style={styles.input}
          keyboardAppearance={Platform.OS === "ios" ? "dark" : "default"}
        />

        <TouchableOpacity
          style={styles.addButton}
          onPress={() => console.log("Add image")}
        >
          <Ionicons name="image-outline" size={20} color="#fff" />
        </TouchableOpacity>
      </View>
      <SettingsSection />
      <CustomButton />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 20,
    backgroundColor: "#0B0B0B",
    borderRadius: 12,
    padding: 12,
    minHeight: 140,
    position: "relative",
    overflow: "hidden",
  },
  input: {
    color: "#FFFFFF",
    fontSize: 16,
    lineHeight: 22,
    paddingRight: 48,
    paddingBottom: 6,
    flex: 1,
  },
  addButton: {
    position: "absolute",
    right: 12,
    bottom: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(255,255,255,0.08)",
    borderWidth: 1,
    borderColor: "rgba(255,255,255,0.06)",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
});

export default SmartScriptContent;
