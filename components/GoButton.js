import React, { Component } from 'react'
import {View, Image, Imagebackground, StyleSheet, TouchableOpacity, Text} from 'react-native'
import {style} from './Styling'
// import nowLocation from '../screens/Location_broken'

const GoButton = () => {
    return(
        <View
        style={style.general}>
            <TouchableOpacity
            style={style.opacity}
                onPress ={() => navigation.navigate("Location",{
                    currentLocation: currentLocation
                })}
                >
                <Text style={style.ththt}>How to Go?</Text>
            </TouchableOpacity>
        </View>
    )

}

export default GoButton

