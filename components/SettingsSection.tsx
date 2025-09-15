import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SettingsItemProps = {
  label: string;
  value: string;
  onPress?: () => void;
  highlight?: boolean;
  showDivider?: boolean;
};

const SettingsItem = ({
  label,
  value,
  onPress,
  highlight,
  showDivider,
}: SettingsItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.itemWrapper, showDivider && styles.itemDivider]}
    >
      <View style={styles.itemRow}>
        <Text style={styles.itemLabel}>{label}</Text>
        <View style={styles.itemValueWrapper}>
          <Text
            style={[styles.itemValue, highlight && styles.itemValueHighlight]}
          >
            {value}
          </Text>
          <Ionicons name="chevron-forward" size={16} color="#fff" />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const SettingsSection = () => {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Settings</Text>
      <View style={styles.container}>
        <SettingsItem
          label="Size"
          value="1080 x 1920 px"
          highlight
          showDivider
        />
        <SettingsItem label="Category" value="Foods and Beverages" highlight />
      </View>
    </View>
  );
};

export default SettingsSection;

const styles = StyleSheet.create({
  section: {
    marginTop: 10,
  },
  sectionTitle: {
    fontFamily: "Inter_400Regular",
    color: "#A0A0A0", 
    fontSize: 16,
  },
  container: {
    backgroundColor: "#0B0B0B",
    borderRadius: 12,
    marginTop: 10,
    padding: 20,
    gap: 8,
  },
  itemWrapper: {
    paddingVertical: 12,
  },
  itemDivider: {
    borderBottomColor: "#2E2E2E", 
    borderBottomWidth: 1,
  },
  itemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemLabel: {
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
  },
  itemValueWrapper: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  itemValue: {
    color: "#FFFFFF",
    fontFamily: "Inter_400Regular",
  },
  itemValueHighlight: {
    color: "#A0A0A0",
  },
});
