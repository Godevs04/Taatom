/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigation } from 'expo-router';
import { useEffect } from 'react';
import { Text, View } from 'react-native';
import { Colors } from '../../constants/Colors';
export default function SignIn() {
const navigation = useNavigation();

useEffect(() => {
  navigation.setOptions({
   headerShown: false, // Hide the header for this screen
  });
}, []);

  return (
    <View style={{ marginTop: 60, padding: 25 , backgroundColor: Colors.WHITE }}>
      <Text style={{ fontSize: 30, fontFamily:'outfit-bold'}}>Let&apos;s Sign You In</Text>
      <Text style={{ fontSize: 30, fontFamily:'outfit',color:Colors.GRAY , marginTop: 20}}>Welcome Back</Text>
      <Text style={{ fontSize: 30, fontFamily:'outfit',color:Colors.GRAY , marginTop: 20}}>You&apos;ve been missed</Text>
    </View>
  );
}