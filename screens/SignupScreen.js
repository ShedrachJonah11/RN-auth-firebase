import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { Apple, ArrowLeft2, Facebook, Google } from "iconsax-react-native";
import image from "../assets/images/welcome.png";
import { useNavigation } from "@react-navigation/native";

export default function SignupScreen() {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.colors.primary }}
    >
      <SafeAreaView className="flex-1">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeft2 size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View className="flex-row justify-center">
          <Image source={image} style={{ width: 280, height: 300 }} />
        </View>
      </SafeAreaView>
      <View
        className="flex bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4">Full Name</Text>
          <TextInput
            placeholder="Enter your full name"
            className="bg-gray-100 p-4 text-gray-700 rounded-2xl"
          />
          <Text className="text-gray-700 ml-4">Email</Text>
          <TextInput
            placeholder="Enter your email"
            value="test@gmail.com"
            keyboardType="email-address"
            className="bg-gray-100 p-4 text-gray-700 rounded-2xl"
          />
          <Text className="text-gray-700 ml-4">Password</Text>
          <TextInput
            placeholder="Enter your password"
            secureTextEntry
            value="test123"
            className="bg-gray-100 p-4 text-gray-700 rounded-2xl"
          />
          <TouchableOpacity className="items-end mr-4 mb-5">
            <Text className="text-gray-700">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-yellow-400 py-3 rounded-xl">
            <Text className="text-center  text-xl font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
        <Text className="text-gray-700 text-center mt-10">or</Text>
        <View className="flex-row justify-center mt-8 space-x-12">
          <TouchableOpacity className="bg-gray-100 p-2 rounded-xl w-12 h-12 items-center justify-center">
            <Google size={24} color="#DB4437" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-xl w-12 h-12 items-center justify-center">
            <Apple size={24} color="#000000" />
          </TouchableOpacity>
          <TouchableOpacity className="bg-gray-100 p-2 rounded-xl w-12 h-12 items-center justify-center">
            <Facebook size={24} color="#4267B2" />
          </TouchableOpacity>
        </View>

        <View className="mt-6 mb-12 flex-row justify-center">
          <Text className="text-gray-500">Already have an account?</Text>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="ml-1"
          >
            <Text className="text-yellow-500 font-semibold">Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
