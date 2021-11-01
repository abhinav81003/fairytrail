import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import colors from './colors';
import { Alert,Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import {Picker} from '@react-native-picker/picker';
const countryList = ["Select Country", "Afghanistan","Albania","Algeria","Andorra","Argentina","Australia","Austria","Bahamas","Bangladesh","Belgium","Bhutan","Botswana","Brazil","Cambodia","Cameroon","Canada","Chad","Chile","China","Colombia","Estonia","Egypt","Equador","France","Finland","Fiji","Gabon","Germany","Ghana","Greece","Guatemala","Haiti","Hungary","Iceland","India","Indonesia","Iran","Israel","Italy","Jamaica","Japan","Jordan","Kazakhstan","Kenya","Kiribati","Kuwait","Laos","Lebanon","Liberia","Malaysia","Myanmar","Nepal","New Zealand","North Korea","Norway","Oman","Pakistan","Paraguay","Peru","Portugal","Philippines","Singapore","Slovakia","Sri Lanka","Sudan","Switzerland","Thailand","Uganda","United Arab Emirates","United Kingdom","United States","Uruguay","Venezuela","Vietnam","Yemen","Zambia","Zimbabwe"];
const types = ["Dating & Friends","Only Friends"];
  
export default function Profile({navigation}) {
  const [editMode, setEditMode] = useState(false)
  const [editCountry, setEditCountry] = useState(false)
  const [name, setName] = useState('Taige')
  const [country,setCountry] = useState( countryList.length - 7 )
  const [countryName,setCountryName] = useState("United States")
  const [age,setAge] = useState("34")
  const [profileType, setProfileType] = useState(0)
  const [characterName, setCharacterName] = useState("Aladdin")
  const [experience, setExperience] = useState("My friend and I got stranded in a blizzard when our SUV froze in Iceland!")
  const [wishes, setWishes] = useState("Take a year off to explore the world. Have a family. Create a better life for people around me.")
  const [values, setValues] = useState("Kindness, family, healthy living, and education.")
  const [hobbies, setHobbies] = useState("Scuba diving and international cuisine.")
  const [instagram, setInstagram] = useState("@taigeair")
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "Back",
      headerRight: ()=> (
          editMode ? 
            <TouchableOpacity  onPress ={ () => {setEditMode(false); console.log("jj")}}> 
            <Text style = {styles.edit_button} > Save </Text>
            </TouchableOpacity>
          :
            <TouchableOpacity  onPress ={ () => {setEditMode(true); console.log("jj")}}>
            <Text style = {styles.edit_button}> Edit </Text>
            </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const changeMode = () =>
    Alert.alert(
      "Choose Mode",
      "You can choose one of two modes",
      [
        {
          text: types[0],
          onPress: () => setProfileType(0)
        },
        { 
          text: types[1],
          onPress: () => setProfileType(1)
        },
        {
          text: "Cancel",
          style: "cancel"
        },
      ]
    );
    const invalidCountry = () =>
    Alert.alert(
      "Invalid Country Name",
      "Please enter a valid country name",
      [
        { 
          text: "Ok",
          style: 'default'
        },
      ]
    );
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.background}>
       
        <View style={styles.header}>
          <Image style={styles.profile_pic} source={require("./img/person.png")}/>
          <View style={styles.name_age_country_line}> 
            { editMode? //checks if edit mode is on
              <TextInput style = {styles.mid_input} 
                        defaultValue = {name} 
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { name => setName(name) }
                        textContentType='givenName'   // Only for iOS
                        autoComplete ='name' // Only for Android
                        autoCapitalize ='words' /> :
              <Text style={styles.titleText}> {name} </Text>   //default name
            } 
            <Text style={styles.titleText} >,</Text>
            { editMode? //checks if edit mode is on
              <TextInput style = {styles.larger_input} 
              defaultValue = {countryList[country]} 
              enablesReturnKeyAutomatically = {true}
              returnKeyType="next"
              onEndEditing = {   countryList.indexOf(countryName) != -1 ?  () => {setCountry(countryList.indexOf(countryName)) ;setEditMode(false)} : ()=>{ invalidCountry(); setEditMode(false);}}
              onChangeText = { country => setCountryName(country) }
              textContentType='countryName'   // Only for iOS
              autoCapitalize ='words' /> :
              <Text style={styles.titleText}> {countryList[country]} </Text> 
            }  
            <Text style={styles.titleText} >,</Text>
            { editMode? //checks if edit mode is on
              <TextInput style = {styles.small_input} 
              defaultValue = {age} 
              enablesReturnKeyAutomatically = {true}
              returnKeyType="next"
              onEndEditing = {()=> setEditMode(false)}
              onChangeText = { age => setAge(age) } /> :
              <Text style={styles.titleText}> {age} </Text> 
            } 
          </View>
        </View>
        <View style={styles.box}>
            <View style={styles.subBox}>
              <Text style={styles.boldText}> Character: </Text>
              { editMode? //checks if edit mode is on
              <TextInput style = {styles.char_input} 
                        defaultValue = {characterName} 
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { char => setCharacterName(char) }
                        autoCapitalize ='words' /> :
              <Text style={styles.characterName}> {characterName}</Text>
              }
            </View>
            <View style={styles.subBox}>
              <View style={styles.roundBox}>
                <Text style={styles.profileTypeText}> {types[profileType]}</Text>
              </View>
            </View>
        </View>
        <View style={styles.introBlock}>
          <Text style={styles.bodyText}> 
          Most adventurous experience:
          </Text>
          { editMode? //checks if edit mode is on
              <TextInput 
                        multiline = {true}
                        style = {styles.large_input} 
                        defaultValue = {experience} 
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { exp => setExperience(exp) }
                        autoCapitalize ='sentences' /> :
          <Text style={styles.bodyText}> 
            {experience}
          </Text>
          }
        </View>
        <View style={styles.introBlock}>
          <Text style={styles.bodyText}> 
            Top wishes:
          </Text>
          { editMode? //checks if edit mode is on
              <TextInput style = {styles.large_input} 
                        defaultValue = {wishes} 
                        multiline = {true}
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { wish => setWishes(wish) }
                        autoCapitalize ='sentences' /> :
          <Text style={styles.bodyText}> 
            {wishes}
          </Text>
          } 
        </View>
        <View style={styles.characterstics}>
            <Text style={styles.charactersticHeader}>
              My values ...
            </Text>
            { editMode? 
            <TextInput style = {styles.large_input} 
                        defaultValue = {values} 
                        multiline = {true}
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { val => setValues(val) }
                        autoCapitalize ='sentences'/> :  
            <Text style={styles.bodyText}>
              {values}    
            </Text>
            }   
        </View>
        <View style={styles.characterstics}>
            <Text style={styles.charactersticHeader}>
            My hobbies ...
            </Text>
            { editMode? 
            <TextInput style = {styles.large_input} 
                        defaultValue = {hobbies} 
                        multiline = {true}
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { hob => setHobbies(hob) }
                        autoCapitalize ='sentences'/> :  
            <Text style={styles.bodyText}>
             {hobbies}   
            </Text>
            }
        </View>
        <View style={styles.characterstics}>
            <Text style={styles.charactersticHeader}>
            Instagram (only shown to your adventure matches)
            </Text>
            { editMode? 
            <TextInput style = {styles.large_input} 
                        defaultValue = {instagram} 
                        multiline = {true}
                        enablesReturnKeyAutomatically = {true}
                        returnKeyType="next"
                        onEndEditing = {()=> setEditMode(false)}
                        onChangeText = { insta => setInstagram(insta) }
                        autoCapitalize ='sentences'/> :  
            <Text style={[styles.bodyText],{fontWeight:'500'}}>
            {instagram}  
            </Text>
            } 
        </View>
        <View style={styles.characterstics}>
            <Text style={styles.charactersticHeader}>
            Fairytrail Mode (tell others know you're not open to dating)
            </Text>
            <TouchableOpacity style={styles.modeBox} onPress = {()=> changeMode()}>
              <View style={styles.modeTextBox}> 
                <Text style={styles.modeText}>
                  {types[profileType]}
                </Text>
              </View>
              <View style={styles.imgBox}> 
                <Image style={styles.arrow}source={require("./img/arrow.png")}/>
              </View>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  edit_button:{
    fontSize: 19,
    paddingTop: 6,
    paddingRight: 18,
    textAlignVertical: 'center',
    color: '#458FF7',
    fontWeight: '400'
  },
  container: {
    flex: 1,
    margin: 10,
    height: '130%',
    paddingBottom: 100
  },
  background:{
    flex: 1,
    height: '200%',
    paddingBottom: 100
  },  
  header: {
    flex:1,
    flexDirection: 'column',
    height: '80%',
    alignContent: 'center',
    alignItems: 'center'
  },
  profile_pic: {
    width: 339,
    height: 339,
    alignContent: 'center',
    borderRadius: 5,
  },
  small_input: {
    width : 60,
    height: 30,
    padding: 5,
    borderWidth: 1,
    fontSize: 23,
    fontWeight: '500',
    borderColor: 'grey',
    borderRadius: 4
  },
  mid_input: {
    width : 100,
    height: 30,
    padding: 5,
    borderWidth: 1,
    fontSize: 23,
    fontWeight: '500',
    borderColor: 'grey',
    borderRadius: 4
  },
  larger_input: {
    width : 151,
    height: 30,
    padding: 5,
    borderWidth: 1,
    fontSize: 23,
    fontWeight: '500',
    borderColor: 'grey',
    borderRadius: 4
  },
  large_input: {
    width : "100%",
    height: 50,
    padding: 1,
    borderWidth: 1,
    fontSize: 15,
    borderColor: 'grey',
    borderRadius: 4
  },
  char_input: {
    width : 100,
    height: 30,
    padding: 5,
    borderWidth: 1,
    fontSize: 18,
    fontWeight: '400',
    borderColor: 'grey',
    color: colors.accent2,
    borderRadius: 4
  },
  name_age_country_line: {
    flexDirection: 'row',
    alignContent: 'flex-start',
    alignSelf: 'flex-start',
    paddingLeft: 16,
    paddingTop: 19
  },
  picker: {
    width: 300,
    height: 80,
    alignSelf: 'center'
},
countryselecter: {
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
},
titleText: {
  fontSize: 23,
  fontWeight: '500'
},  
box:{
  flexDirection: 'row',
  height: "7%"
},
subBox: {
  width: '50%',
  padding: '5%',
  justifyContent: 'center',
},
roundBox: {
  backgroundColor: colors.accent1,
  borderRadius: 10,
  height: '126%',
  justifyContent: 'center',
  alignSelf: 'center',
  width: '92%'
},
profileTypeText: {
  color: "white",
  alignSelf: 'center',
  fontWeight: '600'
},
characterName: {
  color: colors.accent2,
  fontSize: 18
},
boldText: {
  fontWeight: '600',
  fontSize: 17
},
introBlock: {
  marginLeft: 7,
  marginRight: 7,
  paddingLeft: 16,
  paddingRight: 2,
  paddingBottom: 18
},
bodyText: {
  fontSize: 15
},
characterstics: {
  marginLeft: 7,
  marginRight: 7,
  paddingLeft: 17,
  paddingBottom: 16
},
charactersticHeader: {
  fontSize: 15,
  color: colors.accent3,
  fontWeight: '500',
  paddingBottom: 8
},
modeText:{
  fontSize: 15,
},  
imgBox:{
  flexDirection: 'row',
  width: "50%",
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  alignContent: 'flex-end',
  textAlign: 'right'
},  
arrow:{
  width: 15,
  height: 15,
  alignSelf: 'center',
  tintColor: "#444444",
  marginLeft: 48,
},
modeBox:{
  flexDirection: 'row',
  height: "15%",
  width: "90%",
  borderBottomWidth: 2,
  paddingBottom: 2,
  borderBottomColor: "#444444",
},
modeTextBox: {
  width: "50%"
},  

});
