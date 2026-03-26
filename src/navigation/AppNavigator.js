// GOJI2027 Mobile - Navigation Setup
// Using React Navigation with Expo

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import Screens
import SplashScreen from '../screens/SplashScreen';
import LoginSecurely from '../screens/LoginSecurely';
import ForgotPassword from '../screens/ForgotPassword';
import HomeProgressTracker from '../screens/HomeProgressTracker';
import VotersSearchList from '../screens/VotersSearchList';
import SettingsHub from '../screens/SettingsHub';
import SignUpPersonalInfo from '../screens/SignUpPersonalInfo';
import SignUpRoleLocation from '../screens/SignUpRoleLocation';
import VoterProfileDetail from '../screens/VoterProfileDetail';
import InteractiveFieldMap from '../screens/InteractiveFieldMap';
import LogNewInteraction from '../screens/LogNewInteraction';
import OutreachChat from '../screens/OutreachChat';
import VOIPCall from '../screens/VOIPCall';
import MessagingInterface from '../screens/MessagingInterface';
import ChatList from '../screens/ChatList';
import NewChatContacts from '../screens/NewChatContacts';
import CreateGroup from '../screens/CreateGroup';
import CandidateDashboard from '../screens/CandidateDashboard';
import CampaignLandingPage from '../screens/CampaignLandingPage';
import CampaignManifesto from '../screens/CampaignManifesto';
import AboutVision from '../screens/AboutVision';
import CoordinatorOverview from '../screens/CoordinatorOverview';
import PerformanceAnalytics from '../screens/PerformanceAnalytics';
import TeamManagement from '../screens/TeamManagement';
import FindPollingUnit from '../screens/FindPollingUnit';
import GlobalDiasporaHub from '../screens/GlobalDiasporaHub';
import MyProfile from '../screens/MyProfile';
import Notifications from '../screens/Notifications';
import EditProfile from '../screens/EditProfile';

const Stack = createStackNavigator();

// Auth Stack (for login/signup flow)
function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="LoginSecurely" component={LoginSecurely} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="SignUpPersonalInfo" component={SignUpPersonalInfo} />
      <Stack.Screen name="SignUpRoleLocation" component={SignUpRoleLocation} />
    </Stack.Navigator>
  );
}

// Main App Stack
function MainStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeProgressTracker" component={HomeProgressTracker} />
      <Stack.Screen name="VotersSearchList" component={VotersSearchList} />
      <Stack.Screen name="VoterProfileDetail" component={VoterProfileDetail} />
      <Stack.Screen name="InteractiveFieldMap" component={InteractiveFieldMap} />
      <Stack.Screen name="LogNewInteraction" component={LogNewInteraction} />
      <Stack.Screen name="OutreachChat" component={OutreachChat} />
      <Stack.Screen name="VOIPCall" component={VOIPCall} />
      <Stack.Screen name="MessagingInterface" component={MessagingInterface} />
      <Stack.Screen name="ChatList" component={ChatList} />
      <Stack.Screen name="NewChatContacts" component={NewChatContacts} />
      <Stack.Screen name="CreateGroup" component={CreateGroup} />
      <Stack.Screen name="CandidateDashboard" component={CandidateDashboard} />
      <Stack.Screen name="CampaignLandingPage" component={CampaignLandingPage} />
      <Stack.Screen name="CampaignManifesto" component={CampaignManifesto} />
      <Stack.Screen name="AboutVision" component={AboutVision} />
      <Stack.Screen name="CoordinatorOverview" component={CoordinatorOverview} />
      <Stack.Screen name="PerformanceAnalytics" component={PerformanceAnalytics} />
      <Stack.Screen name="TeamManagement" component={TeamManagement} />
      <Stack.Screen name="FindPollingUnit" component={FindPollingUnit} />
      <Stack.Screen name="GlobalDiasporaHub" component={GlobalDiasporaHub} />
      <Stack.Screen name="MyProfile" component={MyProfile} />
      <Stack.Screen name="SettingsHub" component={SettingsHub} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
}

// Root Navigator
export default function AppNavigator() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
