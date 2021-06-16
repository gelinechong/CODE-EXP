import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';
import SettingsAccount from "./SettingsSecondScreen";
import SettingsNotification from "./SettingsNotification";
import SettingsVoucher from "./SettingsVoucher";
import SettingsHelp from "./SettingsHelp";

const item = [ "Account", "Notifications", "Your vouchers", "Help Centre"];

function SettingsScreen( {navigation} ) {
  return (
    <View style={styles.container}>

        <TouchableOpacity onPress = { () =>  
          navigation.navigate("Account Details")} 
            style = {styles.button}
        >
            <Ionicons name="person-circle-outline" size={30} color="black" />
            <Text style = {styles.text}> {item[0]} </Text>
        </TouchableOpacity>  

        <TouchableOpacity onPress = { () =>    
          navigation.navigate("Notifications")} 
            style = {styles.button1}
        >
            <Ionicons name="notifications-circle-outline" size={30} color="black" />
            <Text style = {styles.text}> {item[1]} </Text>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress = { () =>    
          navigation.navigate("Your Vouchers")} 
            style = {styles.button1}
        >
            <Ionicons name="ios-list-circle-outline" size={30} color="black" />
            <Text style = {styles.text}> {item[2]} </Text>
        </TouchableOpacity>  
        
        <TouchableOpacity onPress = { () =>    
          navigation.navigate("Help Centre")} 
            style = {styles.button1}
        >
            <Ionicons name="information-circle-outline" size={30} color="black" />
            <Text style = {styles.text}> {item[3]} </Text>
        </TouchableOpacity>  
    </View>
  );
}

    

const Stack = createStackNavigator();

export default function SettingsStack() {
  return (
      <Stack.Navigator>
          <Stack.Screen 
              name = "SETTINGS" 
              component = {SettingsScreen}
              options = {{
                headerTitleAlign: 'center',
                headerTintColor: 'black ',
              }}
          />
          <Stack.Screen name = "Account Details" component = {SettingsAccount} options = {{ headerTitleStyle: {color: 'white'} }}/>
          <Stack.Screen name = "Notifications" component = {SettingsNotification} options = {{ headerTitleStyle: {color: 'white'} }}/>
          <Stack.Screen name = "Your Vouchers" component = {SettingsVoucher} options = {{ headerTitleStyle: {color: 'white'}}}/>
          <Stack.Screen name = "Help Centre" component = {SettingsHelp} options = {{ headerTitleStyle: {color: 'white'}}}/>
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: 'white'
  },

  button: {
      padding: 10,
      width: "100%",
      backgroundColor: 'white',
      paddingLeft: 20,
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'lightgrey',

  },

  button1: {
    padding: 10,
    width: "100%",
    backgroundColor: 'white',
    paddingLeft: 20,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',

  },

  text: {
    borderBottomColor: 'lightslategrey',
    fontSize: 15,
    marginLeft: 5,
  },
})