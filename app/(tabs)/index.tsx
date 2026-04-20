import "@/global.css";
import { Link } from "expo-router";
import { Text } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";
import { styled } from "nativewind";

const SafeAreaView = styled(RNSafeAreaView);


export default function App() {
  return (
    <SafeAreaView className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-success">
        Welcome to Nativewind!
      </Text>
      <Link href={'/onboarding'} className="mt-4 text-lg rounded-2xl  bg-primary text-white px-4 py-2">
        Goto Onboarding
      </Link>
      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: "spotify" }
      }}>Spotify Subscription</Link>
      <Link href={{
        pathname: '/subscriptions/[id]',
        params: { id: "claude" }
      }}>Claude Subscription</Link>
    </SafeAreaView>
  );
}