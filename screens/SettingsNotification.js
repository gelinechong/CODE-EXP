import * as React from 'react';
import { Text, View } from 'react-native';
import Notification from '../components/Notification';

export default function SettingsNotification() {
    return (
        <View style={{
            flex: 1
        }
        }>
            <Notification 
            title="Notification Settings"
            description="Turn off and on your notifications"></Notification>
            <Notification 
            title="Settings 2"
            description="It has been a long day alr"></Notification>
            <Notification 
            title="Settings 3"
            description="Indeed Have to admit "></Notification>
        </View>
    );
    }
  