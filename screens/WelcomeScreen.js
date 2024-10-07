import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import image from "../assets/images/welcome.png";
import { useNavigation } from "@react-navigation/native";

export default function WelcomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView
      style={{
        backgroundColor: themeColors.colors.primary,
      }}
      className="flex-1"
    >
      <View className="flex-1 flex justify-center items-center my-4 w-full">
        <Text className="text-white text-4xl font-bold mb-20">
          Let's get Started!
        </Text>
        <View className="flex-row justify-center mb-10">
          <Image source={image} style={{ width: 280, height: 300 }} />
        </View>
        <View className="space-y-4 w-full mt-20">
          <TouchableOpacity
            onPress={() => navigation.navigate("Signup")}
            className="bg-yellow-400 py-4 mx-7 rounded-xl"
          >
            <Text className="text-center  text-xl font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
        <View className="mt-6 flex-row justify-center">
          <Text className="text-white">Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="ml-1"
          >
            <Text className="text-yellow-400 font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
