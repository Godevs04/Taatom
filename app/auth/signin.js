/* eslint-disable no-unused-expressions */
import { useNavigation, useRouter } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View
} from "react-native";
import { auth } from "../../configs/FirebaseConfig"; // Import the auth instance
import { Colors } from "../../constants/Colors";
export default function SignIn() {
  const router = useRouter();
  const navigation = useNavigation();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState(); 

const showMessage = (message) => {
  Platform.OS === 'android'
    ? ToastAndroid.show(message, ToastAndroid.SHORT)
    : Alert.alert('', message);
};
  useEffect(() => {
    navigation.setOptions({
      headerShown: false, // Hide the header for this screen
    });
  }, []);
  const onSignIn = () => {
 if (!email || !password) {
  showMessage("Please fill in all fields");
  return;
}
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailPattern.test(email)) {
  showMessage("Please enter a valid email address");
  return;
}

if (password.length < 6) {
  showMessage("Password must be at least 6 characters long");
  return;
}
// if (email.trim() === "" || password.trim() === "") {
//   showMessage("Email and password cannot be empty");
//   return;
// }

// Placeholder for sign-in logic
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log("User signed in:", user);
    showMessage("Sign in successful");
    // Navigate to the home screen or perform any other action
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error signing in:", errorCode, errorMessage);
    showMessage("Error signing in: " + errorMessage);
  });
  };
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
        <TextInput
          placeholder="Enter your Email"
          style={styles.input}
          onChangeText={(text) => setEmail(text)}
        />
      </View>
      <View style={styles.label}>
        {/* Placeholder for password component */}
        <Text>Password</Text>
        <TextInput
          // type="password"
          secureTextEntry={true}
          placeholder="Enter your Password"
          style={styles.input}
          onChangeText={(text) => setPassword(text)}
        />
      </View>
      {/* Placeholder for SignInButton component */}
      <TouchableOpacity
        onPress={onSignIn}
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
      </TouchableOpacity>
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
