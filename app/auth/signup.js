import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation, useRouter } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import {
  Alert,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import { auth } from "../../configs/FirebaseConfig"; // Import the auth instance
import { Colors } from "../../constants/Colors";
export default function SignUp() {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  });
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [fullName, setFullName] = useState();
  const showMessage = (message) => {
    if (Platform.OS === "android") {
      ToastAndroid.show(message, ToastAndroid.SHORT);
    } else {
      Alert.alert("", message);
    }
  };
  // Placeholder for Firebase authentication logic
  const OncreateAccount = () => {
    if (!email || !password || !fullName) {
      showMessage("Please fill in all fields");
      return;
    }

    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      showMessage("Please enter a valid email address");
      return;
    }

    // Validate password strength
    if (password.length < 6) {
      showMessage("Password must be at least 6 characters long");
      return;
    }

    // Validate full name
    if (fullName.trim() === "") {
      showMessage("Full name cannot be empty");
      return;
    }
    // Proceed with Firebase authentication
    console.log("Creating account for:", fullName, email);
    console.log("Password length:", password.length);
    // Implement Firebase authentication logic here
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        showMessage("Account created successfully");
        // Navigate to the home screen or perform any other action
        // For example, you can navigate to the home screen:
        router.replace("./signin");
        // You can also store user details in your database if needed
        console.log("User created:", user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        showMessage("Error creating account: " + errorMessage);
        // Handle errors here, such as showing an error message to the user
        console.error("Error creating user:", errorCode, errorMessage);
        // ...
      });
  };
  return (
    <View
      style={{
        padding: 25,
        paddingTop: 50,
        backgroundColor: Colors.WHITE,
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: "outfit-bold", fontSize: 30, marginTop: 30 }}>
        Create New Account
      </Text>
      <View style={styles.label}>
        {/* Placeholder for Email component */}
        <Text>Full Name</Text>
        <TextInput
          placeholder="Enter your FullName"
          style={styles.input}
          onChangeText={(text) => setFullName(text)}
        />
      </View>
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
        onPress={OncreateAccount}
        style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: Colors.WHITE, textAlign: "center" }}>
          Create Account
        </Text>
      </TouchableOpacity>
      {/* Placeholder for CreateAccountButton component */}
      <TouchableOpacity
        onPress={() => router.replace("auth/signin")}
        style={{
          padding: 20,
          backgroundColor: Colors.WHITE,
          borderRadius: 15,
          marginTop: 20,
          borderWidth: 1,
        }}
      >
        <Text style={{ color: Colors.PRIMARY, textAlign: "center" }}>
          Sign In
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
