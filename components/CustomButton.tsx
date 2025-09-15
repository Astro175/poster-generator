import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import {
  Platform,
  Pressable,
  PressableProps,
  StyleProp,
  Text,
  TextStyle,
  View,
  ViewStyle,
} from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

export interface GenerateButtonProps extends Omit<PressableProps, "onPress"> {
  onPress?: () => void;
  labelStyle?: StyleProp<TextStyle>;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean;
}

export default function CustomButton({
  onPress,
  labelStyle,
  style,
  disabled = false,
  ...rest
}: GenerateButtonProps) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
    opacity: disabled ? 0.6 : 1,
  }));

  return (
    <Animated.View style={[{ alignSelf: "stretch" }, animatedStyle]}>
      <Pressable
        accessibilityRole="button"
        onPress={disabled ? undefined : onPress}
        onPressIn={() => {
          if (!disabled)
            scale.value = withSpring(0.96, { damping: 10, stiffness: 200 });
        }}
        onPressOut={() => {
          if (!disabled)
            scale.value = withSpring(1, { damping: 10, stiffness: 200 });
        }}
        style={({ pressed }) => [
          {
            backgroundColor: "#FFFFFF",
            paddingVertical: 12,
            paddingHorizontal: 16,
            borderRadius: 12,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#F0F0F0",
            ...Platform.select({
              ios: {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.06,
                shadowRadius: 12,
              },
              android: {
                elevation: 2,
              },
            }),
            opacity: pressed ? 0.9 : 1,
          },
          style,
        ]}
        {...rest}
      >
        <Text
          style={[
            {
              fontSize: 16,
              fontWeight: "600",
              color: "#111827",
            },
            labelStyle,
          ]}
        >
          Generate
        </Text>
        <View
          pointerEvents="none"
          style={{
            marginLeft: 12,
            width: 34,
            height: 34,
            borderRadius: 34,
            alignItems: "center",
            justifyContent: "center",
            position: "relative",
          }}
        >
          <View
            style={{
              position: "absolute",
              width: 62,
              height: 62,
              borderRadius: 62,
              backgroundColor: "transparent",
              alignSelf: "center",
              ...Platform.select({
                ios: {
                  shadowColor: "#7C3AED",
                  shadowOffset: { width: 0, height: 0 },
                  shadowOpacity: 0.25,
                  shadowRadius: 20,
                },
                android: {
                  backgroundColor: "rgba(124,58,237,0.07)",
                },
              }),
            }}
          />
          <LinearGradient
            colors={["#7C3AED", "#3B82F6"]}
            start={[0, 0]}
            end={[1, 1]}
            style={{
              width: 20,
              height: 20,
              borderRadius: 20,
              alignItems: "center",
              justifyContent: "center",
              ...Platform.select({
                ios: {
                  shadowColor: "#7C3AED",
                  shadowOpacity: 0.85,
                  shadowRadius: 12,
                  shadowOffset: { width: 0, height: 6 },
                },
                android: {
                  elevation: 6,
                },
              }),
            }}
          />
        </View>
      </Pressable>
    </Animated.View>
  );
}
