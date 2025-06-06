import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList, TabParamList } from './types';

// Importando as telas
import LoginScreen from '../screens/LoginScreen/LoginScreen';
import CadastroScreen from '../screens/CadastroScreen/CadastroScreen';
import DashboardScreen from '../screens/DashboardScreen/DashboardScreen';
import CalendarScreen from '../screens/CalendarScreen/CalendarScreen';
import ChatListScreen from '../screens/ChatListScreen/ChatListScreen';
import ChatScreen from '../screens/ChatScreen/ChatScreen';
import NotificationScreen from '../screens/NotificationScreen/NotificationScreen';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

// Navegador das tabs (menu inferior)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }: { route: { name: keyof TabParamList } }) => ({
        tabBarIcon: ({ focused, color, size }: { focused: boolean; color: string; size: number }) => {
          let iconName: keyof typeof Ionicons.glyphMap = 'home';

          if (route.name === 'Dashboard') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Calendar') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          } else if (route.name === 'Chat') {
            iconName = focused ? 'chatbubbles' : 'chatbubbles-outline';
          } else if (route.name === 'Notifications') {
            iconName = focused ? 'notifications' : 'notifications-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Dashboard" 
        component={DashboardScreen}
      />
      <Tab.Screen 
        name="Calendar" 
        component={CalendarScreen}
      />
      <Tab.Screen 
        name="Chat" 
        component={ChatListScreen}
      />
      <Tab.Screen 
        name="Notifications" 
        component={NotificationScreen}
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}

// Navegador principal
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="MainApp" component={TabNavigator} />
        <Stack.Screen 
          name="ChatScreen" 
          component={ChatScreen}
          options={{
            headerShown: true,
            title: 'Chat',
            headerBackTitle: 'Voltar'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
} 