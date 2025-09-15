import { BlurView } from "expo-blur";
import { Image } from "expo-image";
import React from "react";
import { Platform, Pressable, StyleSheet, Text, View } from "react-native";

type ListItemProps = {
  itemName: string;
  labelTagColor: string;
  itemImage: string;
  isSelected: boolean;
  setSelectedId: (id: number) => void;
  itemId: number;
};

const ListItem = ({
  itemName,
  labelTagColor,
  itemImage,
  isSelected,
  itemId,
  setSelectedId,
}: ListItemProps) => {
  return (
    <Pressable
      onPress={() => setSelectedId(itemId)}
      style={[
        styles.container,
        isSelected &&
          (Platform.OS === "ios"
            ? {
                borderWidth: 2,
                borderColor: "white",
                shadowColor: "white",
                shadowOpacity: 0.5,
                shadowRadius: 6,
                elevation: 5,
              }
            : {
                borderWidth: 2,
                borderColor: "white",
              }),
      ]}
    >
      <Image
        source={itemImage}
        style={StyleSheet.absoluteFillObject}
        transition={1000}
        contentFit="cover"
      />

      <View style={styles.overlayContainer}>
        {Platform.OS === "ios" ? (
          <BlurView intensity={50} tint="light">
            <View
              style={[
                styles.labelContainer,
                { backgroundColor: labelTagColor },
              ]}
            >
              <Text style={styles.text}>{itemName}</Text>
            </View>
          </BlurView>
        ) : (
          <View
            style={[styles.labelContainer, { backgroundColor: labelTagColor }]}
          >
            <Text style={styles.text}>{itemName}</Text>
          </View>
        )}
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 180,
    width: 140,
    borderRadius: 12,
    overflow: "hidden",
  },
  overlayContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    overflow: "hidden",
  },
  labelContainer: {
    padding: 6,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "Inter_500Medium",
    fontSize: 14,
    color: "#fff",
  },
});

export default ListItem;
