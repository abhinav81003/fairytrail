import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Profile from './Profile';
import Home from './Home';
import { Alert,Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer> 
    <Stack.Navigator initialRoute="Home" >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile}
          options={{title: "My Profile", headerRight: () => (
              <TouchableOpacity>
                <Text style={styles.button}>
                  Edit
                </Text>
              </TouchableOpacity>
              )}} />
    </Stack.Navigator>
    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  button:{
    fontSize: 19,
    paddingTop: 6,
    paddingRight: 18,
    textAlignVertical: 'center',
    color: '#458FF7',
    fontWeight: '400'
  }
});
