import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useAuthStore } from '../store/useAuthStore';

// Screens
import WelcomeScreen from '../screens/Welcome/WelcomeScreen';
import LoadingScreen from '../screens/Loading/LoadingScreen';
import EditProfileScreen from '../screens/profile/EditProfileScreen';
import BottomTabs from './BottomTabs';

export type RootStackParamList = {
  Welcome: undefined;
  Loading: undefined;
  MainTabs: undefined;
  EditProfile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

const Router = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {!isAuthenticated ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Loading" component={LoadingScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="MainTabs" component={BottomTabs} />
          <Stack.Screen name="EditProfile" component={EditProfileScreen} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Router;


