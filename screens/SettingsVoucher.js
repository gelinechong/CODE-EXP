import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';


export default function SettingsVoucher() {
    return (
        <View style = {styles.forthPage}>
            <Text> You have no vouchers. </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    forthPage: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%',
      }
})