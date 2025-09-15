import AdvancedScriptContent from "@/components/AdvancedScriptContent";
import SmartScriptContent from "@/components/SmartScriptContent";
import Ionicons from "@expo/vector-icons/Ionicons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import { SafeAreaView } from "react-native-safe-area-context";

type tabs = "smart" | "advanced";
const { width } = Dimensions.get("window");
const TAB_WIDTH = width / 2;
const Screen = () => {
  const [activeTab, setActiveTab] = useState<tabs>("smart");
  const progress = useSharedValue(0);

  const underlineStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(progress.value, [0, 1], [0, TAB_WIDTH]),
        },
      ],
    };
  });
  const switchTab = (tab: tabs) => {
    setActiveTab(tab);
    progress.value = withTiming(tab === "smart" ? 0 : 1, { duration: 250 });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
      <View>
        <Pressable onPress={() => {}} style={{ marginLeft: 10 }}>
          <Ionicons name="close" size={24} color="white" />
        </Pressable>
        <View style={{ flexDirection: "row" }}>
          <Pressable style={styles.tab} onPress={() => switchTab("smart")}>
            <Text
              style={{
                color: activeTab === "smart" ? "white" : "gray",
                fontFamily:
                  activeTab === "smart"
                    ? "Inter_500Medium"
                    : "Inter_400Regular",
              }}
            >
              Smart script
            </Text>
          </Pressable>
          <Pressable style={styles.tab} onPress={() => switchTab("advanced")}>
            <Text
              style={{
                color: activeTab === "advanced" ? "white" : "gray",
                fontFamily:
                  activeTab === "smart"
                    ? "Inter_500Medium"
                    : "Inter_400Regular",
              }}
            >
              Advanced script
            </Text>
          </Pressable>
        </View>
        <Animated.View
          style={[
            { height: 3, width: TAB_WIDTH, backgroundColor: "blue" },
            underlineStyle,
          ]}
        ></Animated.View>
        <View style={{ paddingTop: 16, paddingHorizontal: 20 }}>
          {activeTab === "smart" ? (
            <SmartScriptContent />
          ) : (
            <AdvancedScriptContent />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    backgroundColor: "black",
  },
  tab: {
    flex: 1,
    alignItems: "center",
    padding: 16,
  },
});

export default Screen;
