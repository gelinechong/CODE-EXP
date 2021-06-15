import * as React from "react";
import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Image, TextInput } from "react-native";
import { createStackNavigator, HeaderBackground } from "@react-navigation/stack";
import { Ionicons } from '@expo/vector-icons';

function HomeScreen({ navigation }) {
    return (
          <View style={{ 
              flex: 1, 
              }}
          >
          <TouchableOpacity   
              onPress = { () =>  
              navigation.navigate("Singapore Zoo")}
          >
          <Image style={styles.image}source={{uri:'https://i0.wp.com/en.blog.kkday.com/wp-content/uploads/featured_sgzoo.jpg?fit=924%2C617&ssl=1'}}/>
          </TouchableOpacity>

          <TouchableOpacity   
              onPress = { () =>  
              navigation.navigate("Bukit Timah Nature Reserve")}
          >
          <Image style={styles.image}source={{uri:'https://img2.10bestmedia.com/Images/Photos/35854/p-bukit-timah-nature-reserve-singapore-singapore-attractions-parks-attractions-outdoor-activities-629961_55_660x440_201405301611.jpg'}}/>
          </TouchableOpacity>
          </View>
    );
  };

function HomeListScreen() {
  return (
    <View style = {styles.container}>
    </View>
  );
}

function HomeSearchScreen() {
  return (
    <View style = {styles.container}>

    </View>
  );
}

function SingaporeZoo() {
  return (
    <View style = {styles.container}>
        <Text> third Page </Text>
    </View>
  );
}

function BukitTimah() {
  return (
    <View style = {styles.container}>
        <Text> third Page </Text>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeStack({ navigation }) {
  return (
    <Stack.Navigator>
        <Stack.Screen 
            name = "GUIDE" 
            component = {HomeScreen} 
            options = {{
              headerTitleAlign: "center",
              headerTintColor: "tan",
              headerLeft: () =>
              <TouchableOpacity 
                  style = {styles.button}
                  onPress = { () => 
                  navigation.navigate("List")
                  }
              >
              <Ionicons name="md-list" size={24} color="tan" style={{marginRight: 45}}/>
              </TouchableOpacity>,
              headerRight: () =>
              <TouchableOpacity 
                  style = {styles.button}
                  onPress = { () =>  
                  navigation.navigate("Search")
                  }
              >
              <Ionicons name="ios-search-sharp" size={24} color="tan" style = {{marginLeft: 45}}/>
              </TouchableOpacity>   
            }}
        />
        <Stack.Screen name = "List" component = {HomeListScreen} options = {{ headerTitleStyle: { color: 'white' } }}/>
        <Stack.Screen name = "Search" component = {HomeSearchScreen} options = {{ headerTitleStyle: { color: 'white' } }}/>
        <Stack.Screen name = "Singapore Zoo" component = {SingaporeZoo} />
        <Stack.Screen name = "Bukit Timah Nature Reserve" component = {BukitTimah} />
    </Stack.Navigator>
)
}

const styles = StyleSheet.create({
  button: {
      padding: 10,
      width: 100,
      height: 30,
      borderRadius: 20,
      justifyContent: 'center',
      alignItems: 'center',
  },

  image:{
    width: "90%",
    height: 150,
    borderRadius: 20,
    marginTop: 20,
    marginLeft: 25
  }
})