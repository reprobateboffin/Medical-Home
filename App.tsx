import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import LoadingScreen from './src/screens/Loading/LoadingScreen';
import AppNavigator from './src/navigation/AppNavigator';
import WelcomeScreen from './src/screens/Welcome/WelcomeScreen';
import React, { useState, useEffect } from 'react';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { useAuthStore } from './src/store/useAuthStore';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const loadAssets = async () => {
    try {
      // Resimleri önbelleğe al
      const imageAssets = [
        require('./assets/images/welcome.png'),
        require('./assets/images/logo.png'),
      ];

      const loadImages = imageAssets.map((image) => {
        return Asset.fromModule(image).downloadAsync();
      });

      await Promise.all(loadImages);

      // Diğer başlangıç işlemleri (API çağrıları vb.)
      await new Promise(resolve => setTimeout(resolve, 2000)); // Demo için 2 saniyelik bekleme

      setIsLoading(false);
    } catch (error) {
      console.warn('Yükleme sırasında hata:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadAssets();
  }, []);

  if (isLoading) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <LoadingScreen />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    );
  }

  if (!isAuthenticated) {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <WelcomeScreen />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigator />
      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

