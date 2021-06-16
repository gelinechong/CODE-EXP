import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import VoucherScreen from './screens/VoucherScreen'
import SettingsScreen from './screens/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
          screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
              let iconName;

              if ( route.name === 'Home' ) {
                iconName = 'home-sharp';
              } else if ( route.name === 'Voucher' ) {
                iconName = 'cart-sharp';
              } else if ( route.name === 'Settings' ) {
                iconName = 'settings-sharp';
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })
        }
          tabBarOptions = {{ 
              showLabel: false,
              activeTintColor: 'tan',
              inactiveTintColor: 'silver',
          }}>
              <Tab.Screen name="Hello" component={HomeScreen} />
              <Tab.Screen name="Voucher" component={VoucherScreen} />
              <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}