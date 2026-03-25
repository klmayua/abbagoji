import React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, Newspaper, Calendar, MapPin, Users, MessageSquare, BarChart3, Settings } from 'lucide-react-native';

// Import screens
import {
  HomeScreen,
  NewsScreen,
  NewsDetailScreen,
  EventsScreen,
  GetInvolvedScreen,
  FindPollingUnitScreen,
  DashboardScreen,
  VotersScreen,
  InteractionsScreen,
  MapScreen,
  AnalyticsScreen,
  TeamScreen,
  CommunicationsScreen,
  SettingsScreen,
  LoginScreen,
} from '../screens';

import { useAuth } from '../context/AuthContext';
import { colors } from '../constants/theme';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Public Stack Navigator
function PublicStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface.base },
        headerTintColor: colors.onSurface.DEFAULT,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="News" component={NewsScreen} options={{ title: 'News' }} />
      <Stack.Screen name="NewsDetail" component={NewsDetailScreen} options={{ title: 'Article' }} />
      <Stack.Screen name="Events" component={EventsScreen} options={{ title: 'Events' }} />
      <Stack.Screen name="GetInvolved" component={GetInvolvedScreen} options={{ title: 'Get Involved' }} />
      <Stack.Screen name="FindPollingUnit" component={FindPollingUnitScreen} options={{ title: 'Find Polling Unit' }} />
    </Stack.Navigator>
  );
}

// Field Agent Tab Navigator
function FieldAgentTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: colors.surface.containerLowest,
          borderTopColor: colors.outline.variant,
          borderTopWidth: 1,
          height: 80,
          paddingBottom: 12,
          paddingTop: 8,
        },
        tabBarActiveTintColor: colors.primary.DEFAULT,
        tabBarInactiveTintColor: colors.onSurface.variant,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500',
        },
        headerStyle: { backgroundColor: colors.surface.base },
        headerTintColor: colors.onSurface.DEFAULT,
        headerShadowVisible: false,
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          title: 'Dashboard',
          tabBarIcon: ({ color, size }) => <Home size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Voters"
        component={VotersScreen}
        options={{
          title: 'Voters',
          tabBarIcon: ({ color, size }) => <Users size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Interactions"
        component={InteractionsScreen}
        options={{
          title: 'Interactions',
          tabBarIcon: ({ color, size }) => <MessageSquare size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: 'Map',
          tabBarIcon: ({ color, size }) => <MapPin size={size} color={color} />,
        }}
      />
      <Tab.Screen
        name="More"
        component={MoreStack}
        options={{
          title: 'More',
          tabBarIcon: ({ color, size }) => <Settings size={size} color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}

// More Stack for additional screens
function MoreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: colors.surface.base },
        headerTintColor: colors.onSurface.DEFAULT,
        headerShadowVisible: false,
      }}
    >
      <Stack.Screen name="Analytics" component={AnalyticsScreen} options={{ title: 'Analytics' }} />
      <Stack.Screen name="Team" component={TeamScreen} options={{ title: 'Team' }} />
      <Stack.Screen name="Communications" component={CommunicationsScreen} options={{ title: 'Communications' }} />
      <Stack.Screen name="Settings" component={SettingsScreen} options={{ title: 'Settings' }} />
    </Stack.Navigator>
  );
}

// Loading Screen
function LoadingScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: colors.surface.base, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 18, color: colors.onSurface.DEFAULT }}>Loading...</Text>
    </View>
  );
}

// Main App Navigator
export function AppNavigator() {
  const { isAuthenticated, isLoading } = useAuth();

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isAuthenticated ? (
          <>
            <Stack.Screen name="FieldAgent" component={FieldAgentTabs} />
            <Stack.Screen name="Public" component={PublicStack} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ presentation: 'modal' }} />
          </>
        ) : (
          <>
            <Stack.Screen name="Public" component={PublicStack} />
            <Stack.Screen name="Login" component={LoginScreen} options={{ presentation: 'modal' }} />
            <Stack.Screen name="FieldAgent" component={FieldAgentTabs} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
