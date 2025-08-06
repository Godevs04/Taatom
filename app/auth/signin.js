import { useNavigation, useRouter } from "expo-router";
import { useEffect } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "../../constants/Colors";
export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header for this screen
    });
  }, []);

  return (
    <View
      style={{
        height: "100%",
        padding: 25,
        backgroundColor: Colors.WHITE,
        paddingTop: 80,
      }}
    >
      <Text style={{ fontSize: 30, fontFamily: "outfit-bold" }}>
        Let&apos;s Sign You In
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 20,
        }}
      >
        Welcome Back
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontFamily: "outfit",
          color: Colors.GRAY,
          marginTop: 10,
        }}
      >
        You&apos;ve been missed
      </Text>
      <View style={styles.label}>
        {/* Placeholder for Email component */}
        <Text>Email</Text>
        <TextInput placeholder="Enter your Email" style={styles.input} />
      </View>
      <View style={styles.label}>
        {/* Placeholder for password component */}
        <Text>Password</Text>
        <TextInput
          // type="password"
          secureTextEntry={true}
          placeholder="Enter your Password"
          style={styles.input}
        />
      </View>
      {/* Placeholder for SignInButton component */}
      <View
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Sign In
        </Text>
      </View>
      {/* Placeholder for CreateAccountButton component */}
      <TouchableOpacity
        onPress={() => router.replace("auth/signup")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    borderRadius: 10,
    padding: 15,
    fontFamily: "outfit",
  },
  label: {
    fontFamily: "outfit",
    color: Colors.GRAY,
    marginTop: 20,
  },
});
