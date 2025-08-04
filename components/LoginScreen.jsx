import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Colors } from "../constants/Colors";
export default function LoginScreen() {
    const router = useRouter();
    
  return (
    <View>
      <Image
        source={require("../assets/images/Login.png")}
        style={{ width: "100%", height: 700 }}
      />
      <View style={styles.container}>
        <Text
          style={{
            fontFamily: "outfit-bold",
            fontSize: 28,
            textAlign: "center",
          }}
        >
          Welcome to the Taatom
        </Text>
        <Text
          style={{
            fontFamily: "outfit",
            fontSize: 17,
            textAlign: "center",
            color: Colors.GRAY,
            marginTop: 10,
          }}
        >
          Discover your next adventure effortlessly. Personalized itineraries at
          your fingertips. Travel smarter with Taatom insights.
        </Text>
        <TouchableOpacity onPress={() => router.push("/auth/signin")}>
          <Text style={styles.button}>Lets Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.WHITE,
    marginTop: -60,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 15,
    height: "100%",
  },
  button: {
    backgroundColor: Colors.PRIMARY,
    color: Colors.WHITE,
    padding: 12,
    textAlign: "center",
    borderRadius: 5,
    fontFamily: "outfit-bold",
    marginTop: 15,
    fontSize: 16,
  },
});
