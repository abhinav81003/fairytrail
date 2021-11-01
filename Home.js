import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import colors from './colors';
import { Alert,Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';

  
export default function Home({navigation}) {
    return(
        <View style={{flex: 1,alignContent: 'center', justifyContent: 'center',alignItems: 'center'}}>
            <Text style={{fontWeight:'500',fontSize:33,color: colors.accent1}}> Welcome to FairyTrail</Text>
            <TouchableOpacity style={{backgroundColor: colors.accent2, width: 120,alignContent: 'center', alignItems: 'center',height: 34, justifyContent: 'center' ,padding: 2,marginTop: 10, borderRadius:11 }} onPress={()=> navigation.navigate("Profile")}> 
                <Text style={{color: 'white', fontWeight: '500'}}>
                    Open Profile
                </Text>
            </TouchableOpacity>
        </View>
    );
}
