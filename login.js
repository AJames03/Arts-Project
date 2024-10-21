import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, Text, View, SafeAreaView, ImageBackground,TextInput, Button, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
    'Poppins-SemiBold': require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
  if (!fontsLoaded) {
    return null;
  }

const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={require('../assets/arts 1.png')} // Local image path
        style={styles.backgroundImage}
      >
      </ImageBackground>
      <View>
        <Text style={styles.welcome}>Welcome,</Text>
        <Text style={styles.loginText}>Login to your account</Text>
      </View>

      <View style={styles.inputUser}>
        <Icon name="user" size={24} color="gray" style={styles.icon} />
        <TextInput placeholder="Enter Username" style={styles.input}/>
      </View>
      
      {/* for password */}
      <View style={styles.inputUser}>
        <Icon name="lock" size={24} color="gray" style={styles.icon} />
        <TextInput placeholder="Enter Password" secureTextEntry={isPasswordVisible} style={styles.input}/>
        <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
          <Icon name={isPasswordVisible ? "eye-slash" : "eye"} size={24} color="gray" style={styles.iconSecurity} />
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => alert('Forget Password')}>
          <Text style={styles.forget}>Forget Password</Text>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('Homepage')} style={[styles.button,]}>
          <Text style={styles.loginBtn}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.signupContainer}>
        <Text style={styles.signUp}>Don't have an account?</Text>
        <TouchableOpacity onPress={() => alert('Login Successful')}>
          <Text style={styles.signUp1}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.icon1}>
      <Icon name="facebook" size={24} color="white" />
      <Icon name="google" size={24} color="white"  />
      <Icon name="instagram" size={24} color="white" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 40,
    gap: 20,
    backgroundImage: "url('./assets/arts 1.png')",
  },
  welcome: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  loginText: {
    fontSize: 15,
    fontFamily: 'Poppins-SemiBold',
    display: 'flex',
    justifySelf: 'center',
    alignSelf: 'center',
    color: 'white',
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
  },
  inputUser: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 15,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingRight: 10,
  },
  iconSecurity: {
    fontSize: 18,
  },
  forget: {
    fontSize: 12,
    display: 'flex',
    alignSelf: 'flex-end',
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  button: {
    backgroundColor: '#4A6866',
    borderRadius: 10,
    width: '100%',
    height: 47,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
  },
  loginBtn: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Poppins-Regular',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signupContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  signUp: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
  },
  signUp1: {
    fontSize: 12,
    fontFamily: 'Poppins-SemiBold',
    color: 'white',
    textDecorationLine: 'underline',
  },
  icon1: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 50,
  }
});