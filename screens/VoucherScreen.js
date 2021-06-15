import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("vouchers.db");

function VoucherScreen({ navigation }) {
    return (
        <View style = {styles.container}>
            <Text> </Text>
            <Text style={styles.title}> ADD DEALS TO CART NOW! </Text>
            <TouchableOpacity   
              onPress = { () =>  
              navigation.navigate("Your Cart")}
            >
            <Image style={styles.image}source={{uri:'https://resize.indiatvnews.com/en/resize/newbucket/715_-/2021/04/mask-1619762934.jpg'}}/>
            <Text style={styles.text}> 15% OFF FOR MASKS FROM SELECTED OUTLETS </Text>
            </TouchableOpacity>
        </View>
    )
}

function VoucherSecondScreen() {
    return (
        <View style={styles.container}>
        </View>
    );
}

function YourCartScreen() {
    return (
        <View style={styles.container}>
        </View>
    );
}


const Stack = createStackNavigator();

export default function VoucherStack({ navigation }) {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name = "SHOP" 
                component = {VoucherScreen} 
                options = {{ 
                    headerTitleAlign: 'center', 
                    headerTintColor: 'tan',
                    headerLeft: () =>
                    <TouchableOpacity 
                     style = {styles.button}
                    onPress = { () => 
                    navigation.navigate("Second")
                    }
                    >
                    <Ionicons name="md-list" size={24} color="tan" style={{marginRight: 45}}/>
                    </TouchableOpacity>,
                    headerRight: () =>
                    <TouchableOpacity 
                        style = {styles.button}
                        onPress = { () =>  
                        navigation.navigate("Cart")
                        }
                    >
                    <Ionicons name="cart-outline" size={24} color="tan" style = {{marginLeft: 45}}/>
                    </TouchableOpacity>   
                }}/>
            <Stack.Screen name = "Cart" component = {VoucherSecondScreen} options = {{ headerTitleStyle: {color: 'white'}}}/>
            <Stack.Screen name = "Your Cart" component = {YourCartScreen} options = {{ headerTitleStyle: {color: 'white'}}}/>
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor:  'white',
        height: '100%'
    },

    button: {
        padding: 10,
        width: 100,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },

    image: {
        width: "90%",
        height: 150,
        borderRadius: 20,
        marginTop: 20,
        marginLeft: 25
    },

    text: {
        fontSize: 15,
        paddingTop:10,
        paddingLeft:30,
        color: 'black'
    },

    title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'tomato',
        marginLeft: 125,
    }
})