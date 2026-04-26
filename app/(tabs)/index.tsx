import "@/global.css";
import { Link } from "expo-router";
import { styled } from "nativewind";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-5xl font-sans-extrabold text-success">
        Home
      </Text>
      <Link href={'/onboarding'} className="mt-4 font-sans-semibold text-lg rounded-2xl  bg-primary text-white px-4 py-2">
        Goto Onboarding
      </Link>
      <Link href={'/(auth)/sign-in'} className="mt-4 font-sans-semibold text-lg rounded-2xl  bg-primary text-white px-4 py-2">
        Goto Sign In
      </Link>
      <Link href={'/(auth)/sign-up'} className="mt-4 font-sans-semibold text-lg rounded-2xl  bg-primary text-white px-4 py-2">
        Goto Sign Up
      </Link>
    </SafeAreaView>
  );
}