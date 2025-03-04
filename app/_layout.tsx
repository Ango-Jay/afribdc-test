import {useFonts} from 'expo-font';
import {Stack} from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import {StatusBar} from 'expo-status-bar';
import {useEffect} from 'react';
import 'react-native-reanimated';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontLoaded] = useFonts({
    // SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    JostRegular: require('../assets/fonts/Jost-Regular.ttf'),
    JostMedium: require('../assets/fonts/Jost-Medium.ttf'),
    JostSemiBold: require('../assets/fonts/Jost-SemiBold.ttf'),
    JostBold: require('../assets/fonts/Jost-Bold.ttf'),
  });

  useEffect(() => {
    if (fontLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) {
    return null;
  }

  return (
    <GestureHandlerRootView>
      <Stack>
        <Stack.Screen name="+not-found" />
      </Stack>
      <StatusBar style="auto" />
      </GestureHandlerRootView>
  );
}
