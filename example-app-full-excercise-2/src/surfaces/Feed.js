import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Pressable } from "react-native";
import { ListOfAvatars } from "../components/ListOfAvatars";
import { ListOfCards } from "../components/ListOfCards";
import { LinearGradient } from "expo-linear-gradient";
import { randomText } from "../utils/randomTextUtil";

export const Feed = ({ navigation }) => {
  const generatedRandomText = randomText();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          backgroundColor: "rgba(255,255,255, 0.85)",
          height: 100,
          width: "100%",
          zIndex: 100,
        }}
      />
      <Text style={{ paddingHorizontal: 20, fontSize: 50, fontWeight: "bold" }}>
        {generatedRandomText}
      </Text>
      <ListOfAvatars navigation={navigation} />
      <ListOfCards navigation={navigation} />
    </SafeAreaView>
  );
};
