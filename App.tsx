import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // Correct import

import { Button, Pressable, Text, View } from 'react-native';
import Home from './src/screens/auth/Home';
import ProvideInformation from './src/screens/auth/ProvideInformation';
import WantToRegister from './src/screens/auth/WantToRegister';
import RegisterPage from './src/screens/auth/RegisterPage';
import RegisterPage2 from './src/screens/auth/RegisterPage2';
import RegisterVerification from './src/screens/auth/RegisterVerification';
import VerificationCode from './src/screens/auth/VerificationCode';

const Stack = createNativeStackNavigator(); // Create the stack navigator

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="ProvideInformation">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ProvideInformation" component={ProvideInformation} />
        <Stack.Screen name="WantToRegister" component={WantToRegister} />
        <Stack.Screen name="RegisterPage" component={RegisterPage} />
        <Stack.Screen name="RegisterPage2" component={RegisterPage2} />
        <Stack.Screen name="RegisterVerification" component={RegisterVerification} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
