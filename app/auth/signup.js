import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation, useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Colors } from "../../constants/Colors";
export default function SignUp() {

  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false })
  })
  return (
    < View style={{
      padding: 25,
      paddingTop: 50,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <TouchableOpacity onPress={()=>router.back()}>
      <Ionicons name="arrow-back-circle-sharp" size={30} color="black" />
      </TouchableOpacity>
      <Text style={{ fontFamily: 'outfit-bold', fontSize: 30, marginTop: 30 }}>Create New Account</Text>
      <View style={styles.label}>
        {/* Placeholder for Email component */}
        <Text>Full Name</Text>
        <TextInput placeholder="Enter your FullName" style={styles.input} />
      </View>
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
          Create Account
        </Text>
      </View>
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
  )
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